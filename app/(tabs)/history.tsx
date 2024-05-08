import { SectionList, StyleSheet } from 'react-native';

import { Text } from '@/components/atoms/Themed';
import { useCallback } from 'react';
import { HistoryItem } from '@/components/history/HistoryItem';
import { useFocusEffect } from 'expo-router';
import { useHistoryStore } from '@/storage/historyStore';
import { ListEmptyComponent } from '@/components/history/EmptyHistory';
import { ContainerView } from '@/components/atoms/ContainerView';

export default function HistoryScreen() {
  const { history, fetchHistory } = useHistoryStore();

  // Fetch history when the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, [fetchHistory])
  );

  return (
    <ContainerView centerHorizontal>
      <ContainerView style={styles.listContainer}>
        <SectionList
          sections={history}
          renderItem={({ item }): JSX.Element => {
            const { barcode, name, thumbnailUrl } = item;
            return <HistoryItem barcode={barcode} name={name} thumbnailUrl={thumbnailUrl} />;
          }}
          renderSectionFooter={({ section }): JSX.Element => {
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
          ListEmptyComponent={ListEmptyComponent}
          stickySectionHeadersEnabled={false}
          inverted
        />
      </ContainerView>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
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
