import { DatepickerEntryPoint } from "@/modules/datepicker";
import { MainEntryPoint } from "@/modules/main";
import { vanillaStore } from "@/stores/app";
import { User } from "@/types/user";
import ko from "knockout";
import { FC } from "react";

// Определяем ViewModel всего приложения
// Привязываем react компонент и наблюдаемую переменную для счетчика, чтобы knockout имел к ним доступ
export class AppViewModel {
  // Явно указываем, что это наблюдаемая переменная, хранящая число
  globalCount: KnockoutObservable<number>;
  globalDate: KnockoutObservable<string>;

  // Ссылка на компонент для использования в HTML
  ReactMainComponent: FC<any>;
  ReactDatepickerComponent: FC<any>;

  //zustand
  users = ko.observableArray([]) as KnockoutObservableArray<User>;

  constructor() {
    // Создаем реактивную переменную со стартовым значением 0
    this.globalCount = ko.observable<number>(0);
    this.globalDate = ko.observable<string>(
      new Date().toISOString().split("T")[0],
    );
    // Делаем React-компонент частью ViewModel
    this.ReactMainComponent = MainEntryPoint;
    this.ReactDatepickerComponent = DatepickerEntryPoint;

    // 1. Берем начальные данные из стора
    this.users(vanillaStore.getState().users);

    // 2. Подписываемся на любые изменения в сторе Zustand
    vanillaStore.subscribe((newState, prevState) => {
      if (newState.users !== prevState.users) {
        // Если React (или кто-то еще) добавил юзера, обновляем Knockout!
        this.users(newState.users);
      }
    });
  }

  // Функция, которая будет вызываться при клике на кнопку внутри React-компонента, чтобы синхронизировать счетчик
  // Стрелочная функция намертво привязывает контекст, чтобы внутри react компонента всегда был доступ к this.globalCount
  setGlobalCount = (value: number) => {
    this.globalCount(value);
  };

  setGlobalDate = (value: string) => {
    this.globalDate(value);
  };

  // Если Knockout хочет добавить юзера, он просто дергает метод стора
  addUserFromKnockout() {
    vanillaStore.getState().addUser("Юзер из Knockout");
  }
}
