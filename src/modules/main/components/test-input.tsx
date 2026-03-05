import styles from './test-input.module.css';

interface TestInputProps {
  count: number;
  setCount: (value: number) => void;
}

export function TestInput({ count, setCount }: TestInputProps) {
  //TODO event bus
  /* const handleLogoutClick = () => {
        // Отправляем событие всем, кто на него подписан.
        // 1-й аргумент: данные (payload), которые мы хотим передать
        // 2-й аргумент: имя канала/события (должно совпадать с тем, что в subscribe)
        appEventBus.notifySubscribers(
            { modalId: 'logoutConfirm', message: 'Вы уверены, что хотите выйти?' }, 
            "OPEN_LEGACY_MODAL"
        );
    }; */

  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>React component ⚛️</h3>
      <p>
        Linked with Knockout: <strong>{count}</strong>
      </p>
      <input
        type="number"
        value={count}
        className={styles['button']}
        onChange={(e) => setCount(e.target.valueAsNumber)}
      />
    </div>
  );
}
