import { ApplicationProvider, Spinner } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { Root } from './components/Root';
import { Suspense } from 'react';
import { Preloader } from './state/Preloader';

function App({ children = <Root /> }: { children?: React.ReactNode }) {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Suspense fallback={<Spinner accessibilityLabel="Loading..." />}>
        <Preloader />
        {children}
      </Suspense>
    </ApplicationProvider>
  );
}

export default App;
