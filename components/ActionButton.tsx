import { useState } from 'react';
import { add, multiply } from 'lodash';
import { Pressable, StyleSheet } from 'react-native';
import { CircularProgressBar, Layout, Text } from '@ui-kitten/components';

const min = 0;
const max = 100;
const step = 10;

type Action = 'feed' | 'water' | 'play';

const actionEmojiMap = {
  feed: '🍎',
  water: '💧',
  play: '⚽️',
} as const;

function ActionButton({ action }: { action: Action }) {
  const [level, setLevel] = useState(0);
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
      onPress={() =>
        setLevel((prev) => {
          const update = add(prev, step);
          return update > max ? max : update;
        })
      }
    >
      <CircularProgressBar
        animating={false} // TODO: make this true
        progress={multiply(level, 0.01)}
        renderIcon={() => <Text category="h2">{actionEmojiMap[action]}</Text>}
      />
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
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
  },
});

export { Action, ActionButton };
