import type { HistoryState } from '../types';

export function generateHistoryStateKey(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export function wrapHistoryState<T = unknown>(
  data: T,
  key?: string,
): HistoryState<T> {
  return {
    data,
    key: key || generateHistoryStateKey(),
  };
}

export function readHistoryState<T = unknown>(raw: unknown): HistoryState<T> {
  if (raw !== null && typeof raw === 'object' && 'key' in raw) {
    const entry = raw as HistoryState<T>;
    return { key: entry.key, data: entry.data };
  }
  return { key: generateHistoryStateKey(), data: raw as T };
}
