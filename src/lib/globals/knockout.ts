declare global {
  interface KnockoutExtenders {
    persist(
      target: KnockoutObservable<any>,
      key: string,
    ): KnockoutObservable<any>;
    zustandSync(
      target: KnockoutObservable<any>,
      options: any,
    ): KnockoutObservable<any>;
  }
  interface KnockoutObservable<T> {
    // Делаем метод опциональным (?), потому что он будет
    // только у тех observable, к которым применили экстендер
    disposeZustandSync?: () => void;
  }

  // Если вы планируете вешать этот экстендер еще и на computed-значения:
  interface KnockoutComputed<T> {
    disposeZustandSync?: () => void;
  }
}
