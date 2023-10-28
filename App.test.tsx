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
      max: 1,
      min: 0,
      now: 0.1,
      text: 0.1,
    });

    await userEvent.press(screen.getByLabelText('🍎'));

    expect(screen.getByLabelText('🍎')).toHaveAccessibilityValue({
      max: 1,
      min: 0,
      now: 0.2,
      text: 0.2,
    });

    await userEvent.press(screen.getByLabelText('💧'));
    await userEvent.press(screen.getByLabelText('💧'));

    expect(screen.getByLabelText('💧')).toHaveAccessibilityValue({
      max: 1,
      min: 0,
      now: 0.2,
      text: 0.2,
    });

    await userEvent.press(screen.getByLabelText('⚽️'));
    await userEvent.press(screen.getByLabelText('⚽️'));

    expect(screen.getByLabelText('⚽️')).toHaveAccessibilityValue({
      max: 1,
      min: 0,
      now: 0.2,
      text: 0.2,
    });
  });

  it('can feed up to 100%', async () => {
    render(<App />);

    for (let i = 0; i < 10; i++) {
      await userEvent.press(screen.getByLabelText('🍎'));
    }

    expect(screen.getByLabelText('🍎')).toHaveAccessibilityValue({
      max: 1,
      min: 0,
      now: 1,
      text: 1,
    });

    // This is the 11th press and should not increase the value
    await userEvent.press(screen.getByLabelText('🍎'));

    expect(screen.getByLabelText('🍎')).toHaveAccessibilityValue({
      max: 1,
      min: 0,
      now: 1,
      text: 1,
    });
  });
});
