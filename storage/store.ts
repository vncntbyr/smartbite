import type { HistoryData, HistoryEntry } from '@/types/History';
import { getHistoryData } from '@/utils/dataMapper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_KEY = 'history';

export const storeHistory = async (value: HistoryEntry[]): Promise<void> => {
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

export const clearHistory = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(HISTORY_KEY);
  } catch (e) {
    // saving error
  }
};

// This is hell, I want to refactor it badly but at the same time I don't want to touch it
export const addToHistory = async (value: HistoryData | undefined): Promise<void> => {
  try {
    if (!value) return;
    const currentHistory = (await readHistory()) || [];
    let currentDate = new Date().setHours(0, 0, 0, 0); // Set time to midnight for comparison
    // currentDate = new Date(currentDate).setDate(new Date(currentDate).getDate() + 6); //TODO: can be used for testing -> find better way

    // Find today's history entry or create a new one if it doesn't exist
    let todayHistory = currentHistory.find(
      (entry) => new Date(entry.timestamp).setHours(0, 0, 0, 0) === currentDate
    );

    if (!todayHistory) {
      // If today's date entry doesn't exist, create it and add to history
      todayHistory = { timestamp: new Date(currentDate), data: [value] };
      currentHistory.push(todayHistory);
    } else if (!todayHistory.data.some((data) => data.barcode === value.barcode)) {
      // If today's date entry exists and the barcode is new, add the new data
      todayHistory.data.push(value);
    }
    // No else needed, if the barcode already exists in today's history, do nothing

    // Save the updated history back to storage
    await storeHistory(currentHistory);
  } catch (e) {
    console.error('Error adding to history:', e);
  }
};
