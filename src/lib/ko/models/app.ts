import { appStore, type AppState } from '@/stores/app';
import type { User } from '@/types/user';
import { getCurrentISODate } from '@/utils/mappers/date';
import ko from 'knockout';
import { appEventBus, type ApplicationEventMap } from '../event-bus';

// ViewModel as a shell for the entire application
export class AppViewModel {
  // Observable global variables
  public globalCount: KnockoutObservable<number>;
  public globalDate: KnockoutObservable<string>;
  public globalUsers: KnockoutObservableArray<User>;
  public result: KnockoutComputed<string>;

  // test extenders
  public theme: KnockoutObservable<'light' | 'dark'> & { dispose?: () => void };

  private eventSubscription: KnockoutSubscription;

  // CLIENT SIDE PROGRAMMING NAVIGATION
  public currentPageComponent: KnockoutObservable<string>;
  public currentRouteParams: KnockoutObservable<Record<string, unknown>>;

  //TODO можно вложить несколько других моделей и использовать их в html через биндинг with

  constructor(element: HTMLElement) {
    this.currentPageComponent = ko.observable('home-page-widget');
    this.currentRouteParams = ko.observable({});
    // 1. Слушаем кнопки "Назад" и "Вперед" в браузере
    window.addEventListener('popstate', this.handlePopState);

    // 2. Инициализируем роут при первой загрузке страницы
    this.handlePath(window.location.pathname);

    // Initialize observables with default values
    this.globalCount = ko.observable<number>(0);
    this.globalDate = ko.observable<string>(getCurrentISODate());
    this.globalUsers = ko.observableArray(appStore.getState().users).extend({
      storeSyncArray: {
        store: appStore,
        selector: (state: AppState) => state.users,
        setter: (newUser: string) => appStore.getState().addUser(newUser),
      },
    });

    // Subscribe to the app store to keep Knockout state in sync with React state
    /* appStore.subscribe((newState, prevState) => {
      if (newState.users !== prevState.users) {
        // Update the Knockout observable array with the new users list from the store if it has changed outside of Knockout
        this.globalUsers(newState.users);
      }
    }); */

    // Подписываемся на конкретное событие (третий аргумент — имя канала/события)
    this.eventSubscription = appEventBus.subscribe(
      'REACT_COMPONENT_READY', // Имя события
      this.logToConsole, // Функция обработчик
      this, // Контекст (this)
    );

    // Pure Computed observable is better than computed observable
    this.result = ko.pureComputed(
      () => this.globalCount() + ' ' + this.globalDate(),
    );

    // TODO вынести логику сохранения в localStorage в zustand persist
    this.theme = ko.observable(appStore.getState().theme).extend({
      localStorageSync: 'app_theme',
      storeSync: {
        store: appStore,
        selector: (state: AppState) => state.theme, // Как читать из Zustand
        setter: (newTheme: 'light' | 'dark') =>
          appStore.getState().setTheme(newTheme), // Как писать в Zustand
      },
    });

    // Important because we can put these methods in react components as props
    this.setGlobalCount = this.setGlobalCount.bind(this);
    this.setGlobalDate = this.setGlobalDate.bind(this);
    this.addGlobalUser = this.addGlobalUser.bind(this);

    // Clean up instead of 'dispose' method
    ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
      this.theme.dispose?.();
      this.eventSubscription.dispose();
      window.removeEventListener('popstate', this.handlePopState);
    });
  }

  // Обязательно используем стрелочную функцию, чтобы не потерять контекст
  private logToConsole = (
    payload: ApplicationEventMap['REACT_COMPONENT_READY'],
  ) => {
    console.log(`Component is ready: ${payload.componentId}`);
    // Здесь логика старого jQuery/Knockout модала
  };

  public setGlobalCount(value: number) {
    this.globalCount(value);
  }

  public setGlobalDate(value: string) {
    this.globalDate(value);
  }

  public addGlobalUser() {
    appStore.getState().addUser('New User');
  }

  // Обработчик системного события браузера
  private handlePopState = () => {
    this.handlePath(window.location.pathname);
  };

  // Главная логика разбора URL
  private handlePath = (path: string) => {
    // Убираем первый слэш для удобства парсинга: "/users/42" -> "users/42"
    const cleanPath = path.replace(/^\//, '');
    const segments = cleanPath.split('/');

    const page = segments[0] || 'home'; // Если пусто, значит главная
    const id = segments[1];

    // Назначаем нужный компонент
    switch (page) {
      case 'home':
        this.currentPageComponent('main-component');
        this.currentRouteParams({});
        break;
      case 'test':
        this.currentPageComponent('datepicker-component');
        this.currentRouteParams({ userId: id });
        break;
      default:
        this.currentPageComponent('not-found-component');
        this.currentRouteParams({});
        break;
    }
  };

  // Метод для программной навигации без перезагрузки страницы
  public navigate = (path: string) => {
    if (window.location.pathname !== path) {
      // 1. Меняем URL в строке браузера, НЕ перезагружая страницу
      window.history.pushState({}, '', path);
      // 2. Вручную запускаем парсинг нового пути
      this.handlePath(path);
    }
  };
}
