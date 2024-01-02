import { SafeAreaView, StyleSheet } from 'react-native';
import { Layout, Text, TopNavigation } from '@ui-kitten/components';
import BottomSheet from '@gorhom/bottom-sheet';
import { ActionList } from './ActionList';
import { Actions } from './Actions';

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
        <Actions />
      </Layout>
      <BottomSheet
        backgroundStyle={STYLES.bottomSheet}
        index={1}
        snapPoints={['25%', '50%', '100%']}
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
