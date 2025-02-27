import {
	clearHistory as clearHistoryStorage,
	readHistory,
} from "@/storage/store";
import type { HistoryEntry } from "@/types/History";
import { create } from "zustand";

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
