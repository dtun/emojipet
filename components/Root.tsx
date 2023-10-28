import { SafeAreaView, StyleSheet } from 'react-native';
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  useTheme,
} from '@ui-kitten/components';
import { ActionButton, ActionButtonWrapper } from './ActionButton';

function Root() {
  const theme = useTheme();
  return (
    <SafeAreaView style={STYLES.sav}>
      <TopNavigation alignment="center" title="emojipet" />
      <Divider />
      <Layout style={STYLES.layout}>
        <Text
          category="h1"
          style={{ color: theme['color-primary-100'], fontSize: 96 }}
        >
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
  layout: { alignItems: 'center', flex: 1, justifyContent: 'space-around' },
});

export { Root };
