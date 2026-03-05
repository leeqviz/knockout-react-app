import ko from 'knockout';

// Создаем единственный экземпляр subscribable на всё приложение
export const appEventBus = new ko.subscribable();
