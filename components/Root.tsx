import { SafeAreaView, StyleSheet } from 'react-native';
import { Layout, Text, TopNavigation } from '@ui-kitten/components';
import BottomSheet from '@gorhom/bottom-sheet';
import { ActionButton } from './ActionButton';
import { ActionList } from './ActionList';

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
      <BottomSheet
        backgroundStyle={STYLES.bottomSheet}
        index={1}
        snapPoints={['25%', '50%', '75%']}
      >
        <ActionList />
      </BottomSheet>
    </SafeAreaView>
  );
}

const STYLES = StyleSheet.create({
  sav: { flex: 1, backgroundColor: 'transparent' },
  layout: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '40%',
  },
  textLayout: {
    justifyContent: 'center',
    marginVertical: 24,
  },
  h1: { fontSize: 96 },
  bottomSheet: {
    flex: 1,
    borderColor: 'lightgrey',
    borderWidth: 2,
  },
});

export { Root };
