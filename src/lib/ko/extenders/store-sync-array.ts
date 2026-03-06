import type { StoreSyncArrayConfig } from '../globals';

export function storeSyncArray<TState, TSlice>(
  target: KnockoutObservableArray<TSlice>,
  options: StoreSyncArrayConfig<TState, TSlice>,
): KnockoutObservableArray<TSlice> & { dispose: () => void } {
  const { store, selector, setter } = options;

  // Флаг блокировки для предотвращения эхо-эффекта и бесконечных циклов
  let isSynchronizing = false;

  // 1. Инициализация начального состояния.
  // Читаем текущее значение из Zustand и устанавливаем его в observable,
  // если оно отличается, чтобы избежать лишних событий.
  const initialState = selector(store.getState());
  if (JSON.stringify(target()) !== JSON.stringify(initialState)) {
    target(initialState);
  }

  // 2. Настройка синхронизации: Zustand -> Knockout
  const unsubscribe = store.subscribe((state: TState, prevState: TState) => {
    const newValue = selector(state);
    const oldValue = selector(prevState);

    // Если нужное нам значение реально изменилось и отличается от текущего в KO
    // Проверка строгого равенства предотвращает реакцию на иммутабельно идентичные объекты
    if (
      JSON.stringify(newValue) !== JSON.stringify(oldValue) &&
      JSON.stringify(target()) !== JSON.stringify(newValue)
    ) {
      isSynchronizing = true;
      target(newValue); // Обновляем Knockout
      isSynchronizing = false;
    }
  });

  // 3. Настройка синхронизации: Knockout -> Zustand
  const subscription = target.subscribe((newValue: TSlice[]) => {
    // Если изменение инициировано хранилищем Zustand (работает флаг), прерываем выполнение
    if (isSynchronizing) {
      return;
    }

    const currentState = store.getState();
    const currentSliceValue = selector(currentState);

    // Проверяем, действительно ли значение изменилось относительно текущего состояния хранилища
    if (JSON.stringify(newValue) !== JSON.stringify(currentSliceValue)) {
      if (setter) {
        const stateUpdate = setter(newValue); // Вызываем экшен Zustand
        if (stateUpdate) {
          store.setState(stateUpdate);
        }
      } else {
        console.warn(' Mutated read-only observable without a setter.', target);
      }
    }
  });

  // 3. Управление жизненным циклом и освобождение ресурсов (Memory Management)
  // Переопределение метода dispose необходимо для уничтожения подписок
  // при удалении observable, предотвращая утечки памяти (memory leaks)
  (
    target as KnockoutObservableArray<TSlice> & { dispose: () => void }
  ).dispose = function () {
    unsubscribe();
    subscription.dispose();
  };

  return target as KnockoutObservableArray<TSlice> & { dispose: () => void }; // Возвращаем обогащенный observable
}
