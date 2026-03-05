import ko from 'knockout';

//TODO проверить как работает
ko.extenders.persist = function (target: any, key: any) {
  const savedValue = localStorage.getItem(key);

  if (savedValue !== null) {
    target(JSON.parse(savedValue));
  }

  target.subscribe(function (newValue: any) {
    localStorage.setItem(key, JSON.stringify(newValue));
  });

  return target;
};
