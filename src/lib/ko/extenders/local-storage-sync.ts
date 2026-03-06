export function localStorageSync<T>(
  target: KnockoutObservable<T>,
  key: string,
) {
  const value = localStorage.getItem(key);

  if (value !== null) {
    try {
      target(JSON.parse(value));
    } catch (e) {
      console.error('Error parsing local storage value ', e);
    }
  }

  target.subscribe(function (newValue: T) {
    localStorage.setItem(key, JSON.stringify(newValue));
  });

  return target;
}
