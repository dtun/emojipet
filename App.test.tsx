import { render, screen, userEvent } from '@testing-library/react-native';
import App from './App';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('App', () => {
  it('can feed, water, and play up to 100%', async () => {
    render(<App />);

    for (const action of ['feed', 'water', 'play']) {
      const button = screen.getByLabelText(action);

      const tenPresses = 10;
      for (let i = 0; i < tenPresses; i++) {
        await userEvent.press(button);
      }

      expect(button).toHaveAccessibilityValue({ max: 100, min: 0, now: 100 });

      // This is the 11th press and should not increase the value
      await userEvent.press(button);

      expect(button).toHaveAccessibilityValue({ max: 100, min: 0, now: 100 });
    }
  }, 10_000);
});
