import { Layout, Text, useTheme } from '@ui-kitten/components';

function HomeScreen() {
  const theme = useTheme();
  return (
    <Layout
      style={[
        { flex: 1, justifyContent: 'center', alignItems: 'center' },
        { backgroundColor: theme['color-primary-default'] },
      ]}
    >
      <Text category="h1" style={{ color: theme['color-primary-100'] }}>
        em😀jipet
      </Text>
    </Layout>
  );
}

export { HomeScreen };
