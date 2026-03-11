import { appStore } from '@/stores/app';
import { renderWithRouterContext } from '@/tests/wrappers';
import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { MainContainer } from './components/main-container';

describe('MainEntryPoint', () => {
  beforeEach(() => {
    appStore.getState().reset();
  });

  //render(<MainEntryPoint router={mockedRouterContextValue} />);
  const routerContextValue = renderWithRouterContext(<MainContainer />, {});
  it('must render and display label and input linked with Knockout', () => {
    const input = screen.getByLabelText('Linked with Knockout: ', {
      exact: false,
    });
    expect(input).toBeInTheDocument();
  });
  it('must render and display input linked with Knockout', () => {
    const input = screen.getByRole('spinbutton');
    expect(input).toBeInTheDocument();
  });
  it('must call navigate function', () => {
    const button = screen.getByRole('button', { name: 'Go to test' });
    button.click();
    expect(routerContextValue.navigate).toHaveBeenCalledWith('/test');
  });
});
