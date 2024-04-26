import { SectionList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useCallback } from 'react';
import { HistoryItem } from '@/components/HistoryItem';
import { useFocusEffect } from 'expo-router';
import { useHistoryStore } from '@/storage/historyStore';

export default function HistoryScreen() {
  const { history, fetchHistory } = useHistoryStore();

  // Fetch history when the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, [fetchHistory])
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
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              return (
                <Text style={styles.sectionTitle}>
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
  sectionTitle: {
    fontSize: 18,
    paddingVertical: 2,
  },
});
