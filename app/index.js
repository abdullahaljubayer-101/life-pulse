import { router } from "expo-router";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Index() {
  return (
    <View className="items-center flex-1 justify-evenly bg-violet-50">
      <View className="flex items-center">
        <Text className="text-gray-800" variant="displayLarge">
          Life Pulse
        </Text>
        <Text className="text-gray-600" variant="bodyLarge">
          A productivity and life style mobile application
        </Text>
      </View>
      <Button
        icon="arrow-right"
        contentStyle={{ flexDirection: "row-reverse" }}
        mode="contained-tonal"
        onPress={() => router.push("/(home)")}
      >
        <Text variant="labelLarge">Get Started</Text>
      </Button>
    </View>
  );
}
