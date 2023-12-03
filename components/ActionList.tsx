import { Layout, Text } from '@ui-kitten/components';
import { FlatList } from 'react-native-gesture-handler';
import { useAtom } from 'jotai';
import { actionAtom } from '../state/action';
import { formatTimestamp } from '../utils/formatTimestamp';

function ActionList() {
  const [actions] = useAtom(actionAtom);

  return (
    <FlatList
      data={actions}
      ItemSeparatorComponent={() => (
        <Layout style={{ height: 2, backgroundColor: 'lightgrey' }} />
      )}
      ListEmptyComponent={<Text>No actions</Text>}
      renderItem={({ item }) => (
        <Text style={{ padding: 16 }}>
          {item.type} - {formatTimestamp(item.timestamp)}
        </Text>
      )}
      style={{ flexGrow: 1 }}
    />
  );
}

export { ActionList };
