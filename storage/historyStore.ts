import { create } from 'zustand';
import { readHistory, clearHistory as clearHistoryStorage } from '@/storage/store';
import type { HistoryEntry } from '@/types/History';

type HistoryStore = {
  history: HistoryEntry[];
  fetchHistory: () => Promise<void>;
  clearHistory: () => Promise<void>;
};

export const useHistoryStore = create<HistoryStore>((set) => ({
  history: [],
  fetchHistory: async () => {
    const historyData = await readHistory();
    set({ history: historyData || [] });
  },
  clearHistory: async () => {
    await clearHistoryStorage();
    set({ history: [] });
  },
}));
