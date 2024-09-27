import { router } from "expo-router";
import { View } from "react-native";
import { Button, PaperProvider, Text } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View className="flex-1 items-center justify-evenly bg-violet-100">
        <View className="flex items-center justify-evenly space-y-4">
          <Text variant="headlineLarge">LifePulse</Text>
          <Text variant="titleSmall">
            Best Lifestyle and Productivity application in the world
          </Text>
        </View>
        <Button
          uppercase
          icon="arrow-right-bold-circle"
          mode="contained"
          contentStyle={{ flexDirection: "row-reverse" }}
          onPress={() => router.push("/login")}
        >
          Get Started
        </Button>
      </View>
    </PaperProvider>
  );
}
