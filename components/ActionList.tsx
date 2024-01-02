import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useAtom } from 'jotai';
import { actionAtom } from '../state/action';
import { formatTimestamp } from '../utils/formatTimestamp';

function ActionList() {
  const [actions] = useAtom(actionAtom);

  return (
    <BottomSheetFlatList
      data={actions}
      ItemSeparatorComponent={() => <Layout style={STYLES.itemSeparator} />}
      ListEmptyComponent={<Text>No actions</Text>}
      renderItem={({ item }) => (
        <Text style={STYLES.itemText}>
          {item.type} - {formatTimestamp(item.timestamp)}
        </Text>
      )}
    />
  );
}

export { ActionList };

const STYLES = StyleSheet.create({
  itemText: { padding: 16 },
  itemSeparator: { height: 2, backgroundColor: 'lightgrey' },
});
