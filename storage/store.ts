import type { HistoryEntry } from '@/types/History';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_KEY = 'history';

export const storeHistory = async (value: Record<string, unknown>[]): Promise<void> => {
  try {
    const stringifiedValue = JSON.stringify(value);
    await AsyncStorage.setItem(HISTORY_KEY, stringifiedValue);
  } catch (e) {
    // saving error
  }
};

export const readHistory = async (): Promise<HistoryEntry[] | undefined> => {
  try {
    const jsonValue = await AsyncStorage.getItem(HISTORY_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return;
    // saving error
  }
};

export const clearHistory = async () => {
  try {
    await AsyncStorage.removeItem(HISTORY_KEY);
  } catch (e) {
    // saving error
  }
};

export const addToHistory = async (value: HistoryEntry): Promise<void> => {
  try {
    const jsonValue = await readHistory();
    if (jsonValue) {
      const currentDate = new Date().toISOString().split('T')[0];
      const isDuplicate = jsonValue.some((item: HistoryEntry) => {
        const itemDate = new Date(item.timestamp).toISOString().split('T')[0];
        return itemDate === currentDate;
      });
      if (!isDuplicate) {
        const newHistory = [...jsonValue, value];
        await storeHistory(newHistory);
      }
    } else {
      await storeHistory([value]);
    }
  } catch (e) {
    // saving error
  }
};
