import { appEventBus } from '@/lib/ko/event-bus';
import { useEffect } from 'react';
import styles from './test-input.module.css';

interface TestInputProps {
  count: number;
  setCount: (value: number) => void;
}

export function TestInput({ count, setCount }: TestInputProps) {
  useEffect(() => {
    // Подписка на шину событий Knockout при монтировании React-компонента
    appEventBus.publish('REACT_COMPONENT_READY', { componentId: 'test' });

    // Функция очистки (cleanup function) вызывается React при размонтировании
    return () => {
      //subscription.dispose();
    };
  }, []);

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
