import { useAutofocus } from "@/hooks/useAutofocus";
import { useBarcodeStore } from "@/hooks/useBarcodeStore";
import { Ionicons } from "@expo/vector-icons";
import {
	type BarcodeScanningResult,
	type CameraType,
	CameraView,
	useCameraPermissions,
} from "expo-camera";
import { router } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

let hasScanned = false;

export default function CameraModalScreen() {
	const [facing, setFacing] = useState<CameraType>("back");
	const [torchEnabled, setTorchEnabled] = useState<boolean>(false);
	const { setBarcode } = useBarcodeStore();
	const [permission, requestPermission] = useCameraPermissions();
	const { isRefreshing, focusSquare, onTap } = useAutofocus(650);

	if (!permission || !permission.granted) {
		return (
			<View style={styles.permissionContainer}>
				<Text>This app currently has no permission</Text>
				<Button title="Request permission" onPress={requestPermission} />
			</View>
		);
	}

	const onBarCodeScanned = (barcodeData: BarcodeScanningResult): void => {
		if (hasScanned) {
			console.log("already scanned");
			return;
		}
		console.log("first scan");
		hasScanned = true;
		setBarcode(barcodeData.data);
		console.log("Barcode scanned:", barcodeData.data);
		router.dismiss();
		setTimeout(() => (hasScanned = false), 1000);
	};

	const toggleCameraFacing = () => {
		setFacing((current) => (current === "back" ? "front" : "back"));
	};

	const toggleFlashlight = () => {
		setTorchEnabled((current) => !current);
	};

	const tap = Gesture.Tap().onBegin(onTap);
	return (
		<GestureDetector gesture={tap}>
			<View style={styles.container}>
				<CameraView
					style={styles.camera}
					facing={facing}
					autofocus={isRefreshing ? "off" : "on"}
					onBarcodeScanned={onBarCodeScanned}
					enableTorch={torchEnabled}
				>
					<View style={styles.buttonContainer}>
						<View style={styles.buttonWrapper}>
							<TouchableOpacity
								style={styles.button}
								onPress={toggleFlashlight}
							>
								{torchEnabled ? (
									<Ionicons name="flashlight" size={48} color="white" />
								) : (
									<Ionicons name="flashlight-outline" size={48} color="white" />
								)}
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.button}
								onPress={toggleCameraFacing}
							>
								<Ionicons name="camera-reverse-sharp" size={48} color="white" />
							</TouchableOpacity>
						</View>
					</View>
				</CameraView>
				{focusSquare.visible && (
					<View
						style={[
							styles.focusSquare,
							{ top: focusSquare.y - 25, left: focusSquare.x - 25 },
						]}
					/>
				)}
			</View>
		</GestureDetector>
	);
}

const styles = StyleSheet.create({
	permissionContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		flex: 1,
	},
	camera: {
		flex: 1,
	},
	buttonWrapper: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	buttonContainer: {
		flex: 1,
		marginBottom: 64,
	},
	button: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
	},
	focusSquare: {
		position: "absolute",
		width: 50,
		height: 50,
		borderWidth: 2,
		borderColor: "white",
	},
});
