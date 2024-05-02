import { FlatList, StyleSheet } from 'react-native';

export function BarList<T>({
  data,
  renderItem,
  withSections,
}: {
  data: T[] | undefined;
  renderItem: ({ item }: { item: T }) => JSX.Element;
  withSections?: boolean;
}): JSX.Element {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.ingredientContentContainer}
      style={styles.ingredientList}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  ingredientContentContainer: {
    gap: 8,
    padding: 2,
  },
  ingredientList: {
    width: '100%',
  },
});
