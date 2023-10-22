import { SafeAreaView, StyleSheet } from 'react-native';
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  useTheme,
} from '@ui-kitten/components';

function Root() {
  const theme = useTheme();
  return (
    <SafeAreaView style={STYLES.sav}>
      <TopNavigation alignment="center" title="emojipet" />
      <Divider />
      <Layout style={STYLES.layout}>
        <Text category="h1" style={{ color: theme['color-primary-100'] }}>
          😀
        </Text>
      </Layout>
    </SafeAreaView>
  );
}

const STYLES = StyleSheet.create({
  sav: { flex: 1, backgroundColor: 'transparent' },
  layout: { alignItems: 'center', flex: 1, justifyContent: 'center' },
});

export { Root };
