import { format } from 'date-fns';
import { Layout, Text } from '@ui-kitten/components';
import { FlatList } from 'react-native-gesture-handler';
import { useAtom } from 'jotai';
import { actionAtom } from '../state/action';

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
          {item.type} - {getFormatTimestamp(item.timestamp)}
        </Text>
      )}
      style={{ flexGrow: 1 }}
    />
  );
}

function getFormatTimestamp(timestamp: string) {
  return format(new Date(timestamp), 'eee h:mm:ss a');
}

export { ActionList };
