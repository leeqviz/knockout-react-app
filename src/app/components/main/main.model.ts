import type { ReactBindingOptions } from '@/app/bindings';
import {
  ReactComponentWithRouterViewModel,
  type ReactComponentWithRouterViewModelParams,
} from '@/app/models';
import { MainEntryPointLazy, type MainEntryPointProps } from '@/modules/main';

export class MainViewModel extends ReactComponentWithRouterViewModel {
  public binding: ReactBindingOptions<MainEntryPointProps>;

  public constructor(params: ReactComponentWithRouterViewModelParams) {
    super(params);
    this.binding = {
      component: MainEntryPointLazy,
      props: this.computedProps(),
    };
  }
}
