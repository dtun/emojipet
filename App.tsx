import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { HomeScreen } from './components/HomeScreen';

function App({ children = <HomeScreen /> }: { children?: React.ReactNode }) {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {children}
    </ApplicationProvider>
  );
}

export default App;
