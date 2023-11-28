import {
  act,
  render,
  screen,
  userEvent,
  waitFor,
} from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import App from './App';
import { actionKey } from './state/action';

beforeAll(() => {
  jest.useFakeTimers();
});

beforeEach(() => {
  jest.resetAllMocks();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('App', () => {
  it('informs of no actions', async () => {
    render(<App />);

    await waitFor(() =>
      expect(screen.queryByLabelText('Loading...')).toBeNull()
    );

    expect(screen.getByText('No actions')).toBeVisible();
  });

  it('can feed, water, and play up to 100%', async () => {
    render(<App />);

    await waitFor(() =>
      expect(screen.queryByLabelText('Loading...')).toBeNull()
    );

    for (const action of ['feed', 'water', 'play']) {
      const button = screen.getByLabelText(action);

      for (let i = 0; i < 10; i++) {
        await act(() => userEvent.press(button));
      }

      expect(button).toHaveAccessibilityValue({ max: 100, min: 0, now: 100 });

      // This is the 11th press and should not increase the value
      await act(() => userEvent.press(button));

      expect(button).toHaveAccessibilityValue({ max: 100, min: 0, now: 100 });
    }
  }, 10_000);

  it('cannot feed, water, or play beyond 100%', async () => {
    jest.spyOn(AsyncStorage, 'getItem').mockImplementationOnce((key) => {
      if (key !== actionKey) return Promise.resolve(null);

      return Promise.resolve(
        JSON.stringify([
          ...Array(10).fill({ type: 'feed', timestamp: Date.now() }),
          ...Array(10).fill({ type: 'play', timestamp: Date.now() }),
          ...Array(10).fill({ type: 'water', timestamp: Date.now() }),
        ])
      );
    });

    render(<App />);

    await waitFor(() =>
      expect(screen.queryByLabelText('Loading...')).toBeNull()
    );

    for (const action of ['feed', 'water', 'play']) {
      const button = screen.getByLabelText(action);

      expect(button).toBeDisabled();
    }
  });

  it('can use persisted data', async () => {
    jest.spyOn(AsyncStorage, 'getItem').mockImplementationOnce((key) => {
      if (key !== actionKey) return Promise.resolve(null);

      return Promise.resolve(
        JSON.stringify([
          { type: 'feed', timestamp: 1698983256877 },
          { type: 'play', timestamp: 1698983257444 },
          { type: 'water', timestamp: 1698983258343 },
          { type: 'water', timestamp: 1698983258593 },
        ])
      );
    });

    render(<App />);

    await waitFor(() =>
      expect(screen.queryByLabelText('Loading...')).toBeNull()
    );

    for (const action of ['feed', 'water', 'play']) {
      const button = screen.getByLabelText(action);

      for (let i = 0; i < 10; i++) {
        await act(() => userEvent.press(button));
      }

      expect(button).toHaveAccessibilityValue({ max: 100, min: 0, now: 100 });
    }
  });
});
