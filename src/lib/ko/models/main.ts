import { MainEntryPointLazy, type MainEntryPointProps } from '@/modules/main';
import type { ComponentType } from 'react';
import type { AppViewModel } from './app';

export class MainViewModel {
  public props: unknown;
  public component: ComponentType<MainEntryPointProps>;

  constructor(params: { globals: AppViewModel; route: unknown }) {
    this.props = {
      count: params.globals.globalCount,
      setCount: params.globals.setGlobalCount,
      route: params.route,
    };
    this.component = MainEntryPointLazy;
  }

  public dispose() {}
}
