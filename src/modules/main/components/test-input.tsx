import styles from "./test-input.module.css";

interface TestInputProps {
  count: number;
  setCount: (value: number) => void;
}

export function TestInput({ count, setCount }: TestInputProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>React Компонент ⚛️</h3>
      <p>
        Значение из Knockout: <strong>{count}</strong>
      </p>
      <input
        type="number"
        value={count}
        className={styles.button}
        onChange={(e) => setCount(e.target.valueAsNumber)}
      />
    </div>
  );
}
