import { SectionList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useCallback } from 'react';
import { HistoryItem } from '@/components/HistoryItem';
import { useFocusEffect } from 'expo-router';
import { useHistoryStore } from '@/storage/historyStore';

export default function HistoryScreen() {
  // TODO: Would it make sense to use something like swr for the async data fetching from the device?
  // TODO: Read from history and render data here
  const { history, fetchHistory } = useHistoryStore();

  // Fetch history when the screen is focused
  useFocusEffect(
    useCallback(() => {
      // No need for an isActive flag, Zustand will handle unsubscriptions automatically
      fetchHistory();
    }, [fetchHistory]) // fetchHistory is stable and won't change, so it's safe to add as a dependency
  );

  if (!history) return null;
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <SectionList
          sections={history}
          renderItem={({ item }): JSX.Element => {
            const { barcode, name, thumbnailUrl } = item;
            return <HistoryItem barcode={barcode} name={name} thumbnailUrl={thumbnailUrl} />;
          }}
          renderSectionHeader={({ section }): JSX.Element => {
            if (typeof section.timestamp === 'string') {
              const date = new Date(section.timestamp);
              const day = date.getDate();
              const month = date.getMonth();
              const year = date.getFullYear();
              return (
                <Text>
                  {day}.{month}.{year}
                </Text>
              );
            }
            return <></>;
          }}
          contentContainerStyle={styles.ingredientContentContainer}
          style={styles.ingredientList}
          showsVerticalScrollIndicator={false}
        />
        {/*    <BarList
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
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listContainer: {
    width: '90%',
  },
  ingredientContentContainer: {
    gap: 8,
    padding: 2,
  },
  ingredientList: {
    width: '100%',
  },
});
