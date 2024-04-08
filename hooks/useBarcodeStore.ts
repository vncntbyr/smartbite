import { create } from 'zustand';

type BarcodeStore = {
  barcode: string;
  setBarcode: (newBarcode: string) => void;
};

export const useBearStore = create<BarcodeStore>((set) => ({
  barcode: '',
  setBarcode: (newBarcode) => set(() => ({ barcode: newBarcode })),
}));
