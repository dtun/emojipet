import { SafeAreaView, StyleSheet } from 'react-native';
import { Layout, Text, TopNavigation } from '@ui-kitten/components';
import { ActionButton, ActionButtonWrapper } from './ActionButton';

function Root() {
  return (
    <SafeAreaView style={STYLES.sav}>
      <TopNavigation
        alignment="center"
        title="emojipet"
        // accessoryRight={() => <Text>menu</Text>}
      />
      <Layout style={STYLES.layout}>
        <Text category="h1" style={STYLES.h1}>
          😀
        </Text>
        <ActionButtonWrapper>
          <ActionButton emoji={'🍎'} />
          <ActionButton emoji={'💧'} />
          <ActionButton emoji={'⚽️'} />
        </ActionButtonWrapper>
      </Layout>
    </SafeAreaView>
  );
}

const STYLES = StyleSheet.create({
  sav: { flex: 1, backgroundColor: 'transparent' },
  layout: { alignItems: 'center', flex: 1, justifyContent: 'space-evenly' },
  h1: { fontSize: 96 },
});

export { Root };
