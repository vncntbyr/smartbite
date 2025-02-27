import { useProductStore } from "@/storage/productData";
import { addToHistory } from "@/storage/store";
import type { Ingredient } from "@/types/Ingredient";
import { getHistoryData } from "@/utils/dataMapper";
import { fetchProductData } from "@/utils/network";
import { useEffect } from "react";
import { SectionList, StyleSheet } from "react-native";
import useSWR from "swr";
import { OverviewScreenSkeleton } from "../Skeletons/OverviewScreenSkeleton";
import { CameraButton } from "../atoms/CameraButton";
import { ContainerView } from "../atoms/ContainerView";
import { Text, View } from "../atoms/Themed";
import { IngredientBar } from "../molecules/IngredientBar";
import { ProductOverview } from "../molecules/ProductOverview";
import { ErrorScreen } from "./ErrorScreen";
import { NoBarcodeScanned } from "./NoBarcodeScanned";

type ProductDetailScreenProps = {
	barcode: string;
	isScanPage: boolean;
};

export const ProductDetailScreen = ({
	barcode,
	isScanPage,
}: ProductDetailScreenProps) => {
	// TODO: Do we need this information anywhere?
	const { setActiveProduct } = useProductStore();
	// We don't need additional state management due to SWR's smart caching per barcode. ( A map is created, which stores the data per barcode.)
	const {
		data: productData,
		isLoading,
		error,
	} = useSWR(barcode, fetchProductData);
	useEffect(() => {
		if (!isScanPage) return;
		setActiveProduct(productData);
		addToHistory(getHistoryData(productData));
	}, [productData]);

	if (error) {
		console.log("error", error);
	}

	if (!barcode && isScanPage) return <NoBarcodeScanned />;

	if (isLoading) return <OverviewScreenSkeleton />;

	if (!productData || error) return <ErrorScreen />;

	const { ingredients, imgUrl, nutrients, productName, scores } = productData;
	return (
		<ContainerView centerHorizontal gap={16}>
			<ProductOverview
				imgUrl={imgUrl}
				barcode={barcode}
				productName={productName}
				nutrients={nutrients}
				{...scores}
			/>
			<ContainerView gap={8} style={styles.ingredientContainer}>
				<Text style={styles.title}>Ingredients</Text>
				<SectionList
					sections={ingredients}
					contentContainerStyle={styles.ingredientContentContainer}
					style={styles.ingredientList}
					stickyHeaderHiddenOnScroll
					renderItem={({ item }: { item: Ingredient }): JSX.Element => (
						<IngredientBar
							ingredientName={item.name}
							isVegan={item.isVegan}
							isVegetarian={item.isVegetarian}
						/>
					)}
					renderSectionHeader={({ section }) => {
						if (!section.title) return <View style={styles.removeGap} />;
						return <Text>{section.title}</Text>;
					}}
				/>
			</ContainerView>
			{isScanPage && <CameraButton style={styles.cameraButton} />}
		</ContainerView>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	cameraButton: {
		position: "absolute",
		bottom: 16,
	},
	ingredientContainer: {
		flex: 2,
		alignItems: "flex-start",
		width: "90%",
	},
	ingredientContentContainer: {
		gap: 6,
		padding: 2,
	},
	ingredientList: {
		width: "100%",
	},
	removeGap: {
		paddingTop: -8,
	},
});
