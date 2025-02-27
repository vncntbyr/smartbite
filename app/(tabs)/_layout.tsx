import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import type React from "react";
import { Pressable, View, useColorScheme } from "react-native";

import Colors from "@/constants/Colors";
import { InfoIcon } from "@/constants/icons/InfoIcon";
import { TrashIcon } from "@/constants/icons/TrashIcon";
import { useTranslation } from "@/hooks/useTranslation";
import { useHistoryStore } from "@/storage/historyStore";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const { clearHistory } = useHistoryStore();
	const colorScheme = useColorScheme();
	const t = useTranslation();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerBackgroundContainerStyle: {
					backgroundColor: Colors[colorScheme ?? "light"].headerBackground,
				},
				headerBackground: () => null,
				tabBarStyle: {
					backgroundColor: Colors[colorScheme ?? "light"].headerBackground,
				},
				tabBarBackground: () => (
					<View
						style={{
							borderTopWidth: 1,
							borderTopColor: Colors[colorScheme ?? "light"].borderColor,
						}}
					></View>
				),
			}}
			initialRouteName="index"
		>
			<Tabs.Screen
				name="history"
				options={{
					title: t("bottomTabNavigation.history"),
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="history" color={color} />
					),
					headerRight: () => (
						<Pressable onPress={() => clearHistory()}>
							{({ pressed }) => <TrashIcon pressed={pressed} />}
						</Pressable>
					),
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					title: t("bottomTabNavigation.scan"),
					tabBarIcon: ({ color }) => <TabBarIcon name="camera" color={color} />,
					headerRight: () => (
						<Link href="/InfoModal" asChild>
							<Pressable>
								{({ pressed }) => <InfoIcon pressed={pressed} />}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name="about"
				options={{
					title: t("bottomTabNavigation.about"),
					tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
				}}
			/>
		</Tabs>
	);
}
