import { Link } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Button, PaperProvider, Text, TextInput } from "react-native-paper";

export default function App() {
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  return (
    <PaperProvider>
      <View className="flex-1 justify-evenly bg-violet-100">
        <View className="flex items-center">
          <Text variant="headlineLarge">Register</Text>
        </View>

        <View className="flex p-4 space-y-4">
          <TextInput
            mode="outlined"
            label="Name"
            onChangeText={(value) => (registerInfo.name = value)}
          />
          <TextInput
            mode="outlined"
            label="Email"
            onChangeText={(value) => (registerInfo.email = value)}
          />
          <TextInput
            mode="outlined"
            label="Phone"
            onChangeText={(value) => (registerInfo.phone = value)}
          />
          <TextInput
            mode="outlined"
            label="Password"
            secureTextEntry
            onChangeText={(value) => (registerInfo.password = value)}
          />
          <TextInput mode="outlined" label="Confirm Password" secureTextEntry />
          <Button mode="contained" onPress={() => console.log(registerInfo)}>
            Register
          </Button>
        </View>

        <View className="flex items-center">
          <Text variant="labelLarge">
            Already have an account{" "}
            <Link
              className="text-sm text-right underline text-violet-400"
              href="/login"
            >
              Login
            </Link>
          </Text>
        </View>
      </View>
    </PaperProvider>
  );
}
