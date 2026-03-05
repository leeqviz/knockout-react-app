import ko from 'knockout';
import type { StoreApi } from 'zustand';

ko.extenders.zustandSync = function (
  target: KnockoutObservable<unknown>,
  options: {
    store: StoreApi<unknown>;
    selector: (state: unknown) => unknown;
    updater: (newValue: unknown) => void;
  },
) {
  const { store, selector, updater } = options;

  // Флаг для предотвращения бесконечного эха (цикла)
  let isUpdatingFromZustand = false;

  // 1. Подписка: Zustand -> Knockout
  // store.subscribe в ванильном Zustand срабатывает при любом изменении стора
  const unsubscribeZustand = store.subscribe(
    (state: unknown, prevState: unknown) => {
      const newValue = selector(state);
      const oldValue = selector(prevState);

      // Если нужное нам значение реально изменилось и отличается от текущего в KO
      if (newValue !== oldValue && target() !== newValue) {
        isUpdatingFromZustand = true;
        target(newValue); // Обновляем Knockout
        isUpdatingFromZustand = false;
      }
    },
  );

  // 2. Подписка: Knockout -> Zustand
  const koSubscription = target.subscribe((newValue) => {
    // Защита: обновляем Zustand, только если изменение пришло от пользователя/UI,
    // а не прилетело из самого Zustand шагом выше
    if (!isUpdatingFromZustand) {
      updater(newValue); // Вызываем экшен Zustand
    }
  });

  // 3. Защита от утечек памяти
  // Добавляем метод очистки прямо в observable, чтобы можно было отписаться при удалении модели
  target.disposeZustandSync = function () {
    unsubscribeZustand();
    koSubscription.dispose();
  };

  return target; // Возвращаем обогащенный observable
};
