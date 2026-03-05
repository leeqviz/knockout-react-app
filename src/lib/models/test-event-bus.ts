import { appEventBus } from '../subscirabales/event-bus';

//TODO использовать если потребуется
export class LegacyAppViewModel {
  private eventSubscription: KnockoutSubscription;

  constructor() {
    // Подписываемся на конкретное событие (третий аргумент — имя канала/события)
    this.eventSubscription = appEventBus.subscribe(
      this.showLegacyModal, // Функция-обработчик
      this, // Контекст (this)
      'OPEN_LEGACY_MODAL', // Имя события
    );
  }

  // Обязательно используем стрелочную функцию, чтобы не потерять контекст
  private showLegacyModal = (payload: { modalId: string; message: string }) => {
    console.log(`Knockout получил команду открыть модал: ${payload.modalId}`);
    alert(payload.message); // Здесь логика старого jQuery/Knockout модала
  };

  // ⚠️ КРИТИЧЕСКИ ВАЖНО:
  // Если эта View Model когда-нибудь удаляется из DOM (например, при смене роута),
  // мы обязаны отписаться, иначе будет утечка памяти.
  public dispose() {
    this.eventSubscription.dispose();
  }
}
