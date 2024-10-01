import { router } from "expo-router";
import { View } from "react-native";
import { FAB, Text } from "react-native-paper";

export default function ToDo() {
  return (
    <View className="relative flex-1">
      <Text>To-Do</Text>

      <FAB
        className="absolute z-50 bottom-4 right-4"
        icon="plus"
        onPress={() => router.push("/add-to-do")}
      />
    </View>
  );
}
