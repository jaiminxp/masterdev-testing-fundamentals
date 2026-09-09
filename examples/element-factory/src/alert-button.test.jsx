import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AlertButton } from './alert-button';
import React from 'react';

describe('AlertButton', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should render an alert button', async () => {});

    it('should trigger an alert', async () => {
        render(<AlertButton />)

        const alertSpy = vi.spyOn(window, 'alert');
        const input = screen.getByLabelText('Message')
        const button = screen.getByRole('button', { name: /trigger alert/i })

        await act(async () => {
        await userEvent.clear(input)
        await userEvent.type(input, 'Hello');
        await userEvent.click(button);
        });

        expect(alertSpy).toHaveBeenCalled()
        expect(alertSpy).toHaveBeenCalledWith('Hello')
  });
});
