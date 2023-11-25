import { SafeAreaView, StyleSheet } from 'react-native';
import { Layout, Text, TopNavigation } from '@ui-kitten/components';
import { ActionButton } from './ActionButton';

function Root() {
  return (
    <SafeAreaView style={STYLES.sav}>
      <TopNavigation alignment="center" title="emojipet" />
      <Layout style={STYLES.layout}>
        <Layout style={STYLES.textLayout}>
          <Text category="h1" style={STYLES.h1}>
            😀
          </Text>
        </Layout>
        <ActionButton.Wrapper>
          <ActionButton.Feed />
          <ActionButton.Play />
          <ActionButton.Water />
        </ActionButton.Wrapper>
      </Layout>
    </SafeAreaView>
  );
}

const STYLES = StyleSheet.create({
  sav: { flex: 1, backgroundColor: 'transparent' },
  layout: { alignItems: 'center', flex: 1 },
  textLayout: { justifyContent: 'center', marginVertical: 24 },
  h1: { fontSize: 96 },
});

export { Root };
