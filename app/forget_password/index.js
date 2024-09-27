import { Link } from "expo-router";
import { View } from "react-native";
import {
  Button,
  Divider,
  PaperProvider,
  Text,
  TextInput,
} from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View className="flex-1 justify-evenly bg-violet-100">
        <View className="flex items-center">
          <Text variant="headlineLarge">Forget Password</Text>
        </View>

        <View className="flex space-y-4 p-4">
          <TextInput mode="outlined" label="Email" />
          <Button mode="contained" onPress={() => console.log("Send OTP")}>
            Send OTP
          </Button>
        </View>

        <View className="flex-row items-center justify-center">
          <Link
            className=" text-violet-400 underline text-right text-sm"
            href="/login"
          >
            Login
          </Link>
          <Text variant="bodyLarge" className="text-violet-400">
            {"  "}|{"  "}
          </Text>
          <Link
            className=" text-violet-400 underline text-right text-sm"
            href="/register"
          >
            Register
          </Link>
        </View>
      </View>
    </PaperProvider>
  );
}
