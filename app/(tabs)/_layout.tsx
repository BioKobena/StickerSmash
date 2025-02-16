import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {
    return (
            <Tabs
                screenOptions={{
                    tabBarActiveBackgroundColor: "#F0F0F0",
                    headerStyle: {
                        backgroundColor: "#25292e",
                    },
                    headerShadowVisible: false,
                    headerTintColor: "#fffddd",
                    tabBarStyle: {
                        backgroundColor: "#25292e",
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        headerTitle: "Sticker Smash",
                        tabBarIcon: ({ focused, color }) => (
                            <Ionicons
                                name={focused ? "home-sharp" : "home-outline"}
                                color={color}
                                size={15}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="about"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused, color }) => (
                            <Ionicons
                                name={focused
                                    ? "information-circle"
                                    : "information-circle-outline"}
                                color={color}
                                size={15}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="+not-found"
                    options={{}}
                />
            </Tabs>
    );
}
