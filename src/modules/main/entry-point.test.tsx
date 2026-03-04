import { MainEntryPoint } from '@/modules/main/entry-point';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('MainEntryPoint', () => {
  it('must render', () => {
    render(
      <MainEntryPoint
        count={0}
        setCount={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );

    // expect(screen.getByText('text')).toBeInTheDocument();
  });
});
