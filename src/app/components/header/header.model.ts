import type { ReactBindingOptions } from '@/app/bindings';
import {
  ReactComponentWithRouterViewModel,
  type ReactComponentWithRouterViewModelParams,
} from '@/app/models';
import {
  HeaderEntryPointLazy,
  type HeaderEntryPointProps,
} from '@/modules/header';
import { ko } from '@/shared/lib/ko';

export class HeaderViewModel extends ReactComponentWithRouterViewModel<HeaderEntryPointProps> {
  public bindingOptions: KnockoutComputed<
    ReactBindingOptions<HeaderEntryPointProps>
  >;

  public constructor(params: ReactComponentWithRouterViewModelParams) {
    super(params);
    this.bindingOptions = ko.pureComputed(
      (): ReactBindingOptions<HeaderEntryPointProps> => ({
        component: HeaderEntryPointLazy,
        props: this.props,
      }),
    );
  }
}
