import { render, screen, userEvent } from '@testing-library/react-native';
import App from './App';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('App', () => {
  it('renders', () => {
    render(<App />);
  });

  it('can feed, water, and play', async () => {
    render(<App />);

    await userEvent.press(screen.getByLabelText('🍎'));

    expect(screen.getByLabelText('🍎')).toHaveAccessibilityValue({
      max: 100,
      min: 0,
      now: 10,
    });

    await userEvent.press(screen.getByLabelText('🍎'));

    expect(screen.getByLabelText('🍎')).toHaveAccessibilityValue({
      max: 100,
      min: 0,
      now: 20,
    });

    await userEvent.press(screen.getByLabelText('💧'));
    await userEvent.press(screen.getByLabelText('💧'));

    expect(screen.getByLabelText('💧')).toHaveAccessibilityValue({
      max: 100,
      min: 0,
      now: 20,
    });

    await userEvent.press(screen.getByLabelText('⚽️'));
    await userEvent.press(screen.getByLabelText('⚽️'));

    expect(screen.getByLabelText('⚽️')).toHaveAccessibilityValue({
      max: 100,
      min: 0,
      now: 20,
    });
  });

  it('can feed up to 100%', async () => {
    render(<App />);

    for (let i = 0; i < 10; i++) {
      await userEvent.press(screen.getByLabelText('🍎'));
    }

    expect(screen.getByLabelText('🍎')).toHaveAccessibilityValue({
      max: 100,
      min: 0,
      now: 100,
    });

    // This is the 11th press and should not increase the value
    await userEvent.press(screen.getByLabelText('🍎'));

    expect(screen.getByLabelText('🍎')).toHaveAccessibilityValue({
      max: 100,
      min: 0,
      now: 100,
    });
  });
});
