import { useState } from 'react';
import { add, multiply } from 'lodash';
import { Pressable, StyleSheet } from 'react-native';
import { CircularProgressBar, Layout, Text } from '@ui-kitten/components';

const min = 0;
const max = 100;
const step = 10;

function ActionButton({ emoji }: { emoji: string }) {
  const [level, setLevel] = useState(0);
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={emoji}
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
        renderIcon={() => <Text category="h2">{emoji}</Text>}
      />
    </Pressable>
  );
}

function ActionButtonWrapper({ children }: { children: React.ReactNode }) {
  return <Layout style={STYLES.layout}>{children}</Layout>;
}

const STYLES = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
  },
});

export { ActionButton, ActionButtonWrapper };
