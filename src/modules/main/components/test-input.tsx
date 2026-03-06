import { appEventBus } from '@/lib/ko/event-bus';
import { useEffect } from 'react';
import styles from './test-input.module.css';

interface TestInputProps {
  count: number;
  setCount: (value: number) => void;
}

export function TestInput({ count, setCount }: TestInputProps) {
  useEffect(() => {
    appEventBus.publish('REACT_COMPONENT_READY', { componentId: 'test' });

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
