import type { ReactBindingOptions } from '@/app/bindings';
import {
  ReactComponentWithRouterViewModel,
  type ReactComponentWithRouterViewModelParams,
} from '@/app/models';
import { MainEntryPointLazy, type MainEntryPointProps } from '@/modules/main';
import { ko } from '@/shared/lib/ko';

export class MainViewModel extends ReactComponentWithRouterViewModel<MainEntryPointProps> {
  public bindingOptions: KnockoutComputed<
    ReactBindingOptions<MainEntryPointProps>
  >;

  public constructor(params: ReactComponentWithRouterViewModelParams) {
    super(params);
    this.bindingOptions = ko.pureComputed(
      (): ReactBindingOptions<MainEntryPointProps> => ({
        component: MainEntryPointLazy,
        props: this.props,
      }),
    );
  }
}
