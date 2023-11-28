import { Suspense } from 'react';
import { ApplicationProvider, Spinner } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Root } from './components/Root';
import { Preloader } from './state/Preloader';

function App({ children = <Root /> }: { children?: React.ReactNode }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Suspense fallback={<Spinner accessibilityLabel="Loading..." />}>
          <Preloader />
          {children}
        </Suspense>
      </ApplicationProvider>
    </GestureHandlerRootView>
  );
}

export default App;
