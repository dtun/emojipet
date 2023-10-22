import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { Root } from './components/Root';

function App({ children = <Root /> }: { children?: React.ReactNode }) {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {children}
    </ApplicationProvider>
  );
}

export default App;
