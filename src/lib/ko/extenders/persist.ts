import ko from 'knockout';

ko.extenders.persist = function (
  target: KnockoutObservable<unknown>,
  key: string,
) {
  const value = localStorage.getItem(key);

  if (value !== null) {
    target(JSON.parse(value));
  }

  target.subscribe(function (newValue: unknown) {
    localStorage.setItem(key, JSON.stringify(newValue));
  });

  return target;
};
