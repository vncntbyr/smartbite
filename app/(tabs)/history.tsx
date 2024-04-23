import { FlatList, SectionList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import { readHistory } from '@/storage/store';
import { HistoryEntry } from '@/types/History';
import { BarList } from '@/components/BarList';
import { HistoryItem } from '@/components/HistoryItem';

export default function HistoryScreen() {
  // TODO: Would it make sense to use something like swr for the async data fetching from the device?
  // TODO: Read from history and render data here
  const [history, setHistory] = useState<HistoryEntry[] | undefined>();
  useEffect(() => {
    const getHistory = async () => {
      return await readHistory();
    };
    getHistory().then((data) => setHistory(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.listContainer}>
        <BarList
          data={history}
          renderItem={({ item }): JSX.Element => {
            const { barcode, name, timestamp, thumbnailUrl } = item;
            return (
              <HistoryItem
                barcode={barcode}
                name={name}
                timestamp={timestamp}
                thumbnailUrl={thumbnailUrl}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  listContainer: {
    width: '90%',
  },
});
