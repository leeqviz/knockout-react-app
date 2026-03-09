import { MainEntryPointLazy, type MainEntryPointProps } from '@/modules/main';
import ko from 'knockout';
import type { ComponentType } from 'react';
import { mapRouterData } from '../mapper';
import type { AppViewModel } from './app';

export class MainViewModel {
  public computedProps: KnockoutComputed<MainEntryPointProps>;
  public component: ComponentType<MainEntryPointProps>;

  constructor(params: { globals: AppViewModel }) {
    // pureComputed guarantees that the function will only be called when the observable changes
    this.computedProps = ko.pureComputed(() => ({
      router: params.globals ? mapRouterData(params.globals) : null,
    }));
    this.component = MainEntryPointLazy;
  }

  public dispose() {}
}
