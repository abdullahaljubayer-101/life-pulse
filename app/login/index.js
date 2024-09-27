import { Link } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Button, PaperProvider, Text, TextInput } from "react-native-paper";

export default function App() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  return (
    <PaperProvider>
      <View className="flex-1 justify-evenly bg-violet-100">
        <View className="flex items-center">
          <Text variant="headlineLarge">Login Romel</Text>
        </View>

        <View className="flex p-4 space-y-4">
          <TextInput
            mode="outlined"
            label="Email"
            onChangeText={(value) => (loginInfo.email = value)}
          />
          <TextInput
            mode="outlined"
            label="Password"
            secureTextEntry
            onChangeText={(value) => (loginInfo.password = value)}
          />
          <Link
            className="text-lg text-right underline text-violet-400"
            href="/forget_password"
          >
            Forget Password
          </Link>
          <Button mode="contained" onPress={() => console.log(loginInfo)}>
            Login
          </Button>
        </View>

        <View className="flex items-center">
          <Text variant="labelLarge">
            Doesn't have an account{" "}
            <Link
              className="text-sm text-right underline text-violet-400"
              href="/register"
            >
              Register
            </Link>
          </Text>
        </View>
      </View>
    </PaperProvider>
  );
}
