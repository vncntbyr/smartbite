import type { ProductData } from "@/types/ProductData";
import { create } from "zustand";

type ProductStore = {
	activeProduct: ProductData | undefined;
	setActiveProduct: (productData: ProductData | undefined) => Promise<void>;
	resetActiveProduct: () => Promise<void>;
};

export const useProductStore = create<ProductStore>((set) => ({
	activeProduct: undefined,
	setActiveProduct: async (productData) => {
		set({ activeProduct: productData || undefined });
	},
	resetActiveProduct: async () => {
		set({ activeProduct: undefined });
	},
}));
