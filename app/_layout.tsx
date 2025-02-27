import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import Colors from "@/constants/Colors";
import { aboutRoutes } from "@/constants/routes";
import { useTranslation } from "@/hooks/useTranslation";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const t = useTranslation();
	const colorScheme = useColorScheme();

	// Shared settings for header styling.
	const headerStyle = {
		headerStyle: {
			backgroundColor: Colors[colorScheme ?? "light"].headerBackground,
		},
		headerShadowVisible: false,
		headerShown: true,
		headerBackTitle: t("navigation.back"),
	};

	return (
		<GestureHandlerRootView>
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen
						name="barcode/[slug]/index"
						options={{
							...headerStyle,
							title: t("navigation.barcodeTitle"),
						}}
					/>
					<Stack.Screen
						name="barcode/[slug]/details"
						options={{
							...headerStyle,
							title: t("navigation.detailsTitle"),
						}}
					/>
					<Stack.Screen
						name="(modals)/InfoModal"
						options={{
							presentation: "modal",
							title: t("infoModal.title"),
							headerShown: false,
							contentStyle: {
								maxHeight: "auto",
								position: "absolute",
								bottom: 0,
								height: "auto",
								borderTopLeftRadius: 10,
								borderTopRightRadius: 10,
								backgroundColor: Colors[colorScheme ?? "light"].background,
							},
						}}
					/>
					<Stack.Screen
						name="(modals)/CameraModal"
						options={{ headerShown: false, presentation: "modal" }}
					/>
					{aboutRoutes.map((route) => (
						<Stack.Screen
							key={route.path}
							name={route.path}
							options={{ ...headerStyle, title: t(route.titleString) }}
						/>
					))}
				</Stack>
			</ThemeProvider>
		</GestureHandlerRootView>
	);
}
