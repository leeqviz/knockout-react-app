import type { ScrollBehaviorStrategy } from '../types';

export function scrollToTarget(target: ScrollToOptions | null): void {
  if (!target) return;
  requestAnimationFrame(() => {
    window.scrollTo(target);
  });
}

export function scrollToFragment(
  hash: string,
  options?: ScrollIntoViewOptions,
): void {
  if (!hash) return;
  requestAnimationFrame(() => {
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    if (!id) return;

    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: options?.behavior || 'auto' });
      return;
    }

    const el =
      document.getElementById(id) ??
      document.querySelector<HTMLElement>(`[name="${id}"]`);

    el?.scrollIntoView({ ...options, behavior: options?.behavior || 'auto' });
  });
}

export const defaultScrollBehavior: ScrollBehaviorStrategy = (
  _to,
  _from,
  options,
) => {
  if (options) return options;
  return { top: 0, left: 0, behavior: 'smooth' };
};
