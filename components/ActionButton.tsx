import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { CircularProgressBar, Layout, Text } from '@ui-kitten/components';

function ActionButton({ emoji }: { emoji: string }) {
  const [level, setLevel] = useState(0);
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={emoji}
      accessibilityValue={{
        max: 1,
        min: 0,
        now: level,
        text: `${level}`,
      }}
      onPress={() =>
        setLevel((prev) => {
          const update = prev + 0.1;
          return update > 1 ? 1 : update;
        })
      }
    >
      <CircularProgressBar
        animating={false} // TODO: make this true
        progress={level}
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
