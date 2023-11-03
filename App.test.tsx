import {
  act,
  render,
  screen,
  userEvent,
  waitFor,
} from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

    await waitFor(() => expect(screen.queryByTestId('Spinner')).toBeNull());

    for (const action of ['feed', 'water', 'play']) {
      const button = screen.getByLabelText(action);

      for (let i = 0; i < 10; i++) {
        await act(() => {
          userEvent.press(button);
        });
      }

      expect(button).toHaveAccessibilityValue({ max: 100, min: 0, now: 100 });

      // This is the 11th press and should not increase the value
      await act(() => {
        userEvent.press(button);
      });

      expect(button).toHaveAccessibilityValue({ max: 100, min: 0, now: 100 });
    }
  }, 10_000);

  it('can use data passed from AsyncStorage', async () => {
    jest.spyOn(AsyncStorage, 'getItem').mockResolvedValue(
      JSON.stringify([
        { type: 'feed', timestamp: 1698983256877 },
        { type: 'play', timestamp: 1698983257444 },
        { type: 'water', timestamp: 1698983258343 },
        { type: 'water', timestamp: 1698983258593 },
      ])
    );

    render(<App />);

    await waitFor(() => expect(screen.queryByTestId('Spinner')).toBeNull());

    for (const action of ['feed', 'water', 'play']) {
      const button = screen.getByLabelText(action);

      for (let i = 0; i < 10; i++) {
        await act(() => {
          userEvent.press(button);
        });
      }

      expect(button).toHaveAccessibilityValue({ max: 100, min: 0, now: 100 });
    }
  }, 10_000);
});
