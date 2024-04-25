export type HistoryEntry = {
  timestamp: Date;
  data: HistoryData[];
};

export type HistoryData = {
  barcode: string;
  name: string;
  thumbnailUrl: string;
};
