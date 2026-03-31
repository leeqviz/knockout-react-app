import type { ReactBindingOptions } from '@/app/bindings';
import {
  ReactComponentWithRouterViewModel,
  type ReactComponentWithRouterViewModelParams,
} from '@/app/models';
import {
  NotFoundEntryPoint,
  type NotFoundEntryPointProps,
} from '@/modules/not-found';
import { ko } from '@/shared/lib/ko';

export class NotFoundViewModel extends ReactComponentWithRouterViewModel<NotFoundEntryPointProps> {
  public bindingOptions: KnockoutComputed<
    ReactBindingOptions<NotFoundEntryPointProps>
  >;

  public constructor(params: ReactComponentWithRouterViewModelParams) {
    super(params);
    this.bindingOptions = ko.pureComputed(
      (): ReactBindingOptions<NotFoundEntryPointProps> => ({
        component: NotFoundEntryPoint,
        props: this.props,
      }),
    );
  }
}
