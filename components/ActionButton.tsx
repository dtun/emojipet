import { useAtom } from 'jotai';
import { multiply } from 'lodash';
import { Pressable, StyleSheet } from 'react-native';
import { CircularProgressBar, Layout, Text } from '@ui-kitten/components';
import { actionAtom } from '../state/action';

const min = 0;
const max = 100;
const step = 10;

type Action = 'feed' | 'water' | 'play';

const actionEmojiMap: Record<Action, string> = {
  feed: '🍎',
  water: '💧',
  play: '⚽️',
};

function ActionButton({ action }: { action: Action }) {
  const [actions, setActions] = useAtom(actionAtom);
  const filteredActions = actions?.filter((a) => a.type === action);
  const level = Math.min(filteredActions.length * step, 100);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={action}
      accessibilityValue={{
        max,
        min,
        now: level,
        text: `${level} percent`,
      }}
      onPress={() => {
        setActions([...actions, { type: action, timestamp: Date.now() }]);
      }}
      disabled={level === max}
      style={STYLES.pressable}
    >
      <CircularProgressBar
        animating={false} // TODO: make this true
        progress={multiply(level, 0.01)}
        renderIcon={() => <Text category="h2">{actionEmojiMap[action]}</Text>}
        status="success"
      />
      <Text category="h3">{action}</Text>
    </Pressable>
  );
}

ActionButton.Feed = () => <ActionButton action="feed" />;

ActionButton.Play = () => <ActionButton action="play" />;

ActionButton.Water = () => <ActionButton action="water" />;

ActionButton.Wrapper = ({ children }: { children: React.ReactNode }) => (
  <Layout style={STYLES.layout}>{children}</Layout>
);

const STYLES = StyleSheet.create({
  layout: { flexDirection: 'row', alignItems: 'center' },
  pressable: { flex: 1, alignItems: 'center' },
});

export { Action, ActionButton };
