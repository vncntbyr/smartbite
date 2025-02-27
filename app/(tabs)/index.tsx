import { ProductDetailScreen } from "@/components/screens/ProductDetailScreen";
import { useBarcodeStore } from "@/hooks/useBarcodeStore";

export default function OverviewScreen() {
	const { barcode } = useBarcodeStore();
	// Studentenfutter 4008258154229, Nudelsuppe 737628064502, Salami 20036362,
	// lasagna 4388860553840, hefeweizen 4066600641964, radler 4043800017713, Erdnussbutter 4055732632001
	// const barcode = '4008258154229';
	console.log("returning screen");
	return <ProductDetailScreen barcode={barcode} isScanPage={true} />;
}
