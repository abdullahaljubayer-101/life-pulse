import { router } from "expo-router";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function GroupToDo() {
  return (
    <View>
      <Text>Group To-Do</Text>
      <Button mode="text" onPress={() => router.push("/add-group-to-do")}>
        Add
      </Button>
    </View>
  );
}
