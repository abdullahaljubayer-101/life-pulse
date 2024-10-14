import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { Link, router } from "expo-router";
import { ColorSchemeStore } from "nativewind/dist/style-sheet/color-scheme";

export default function Login() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const login = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        router.push("/(home)");
      } else {
        setError("root", {
          message: result.msg,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View className="items-center justify-center flex-1 gap-6 bg-violet-50">
      {/* >title */}
      <Text className="text-gray-800" variant="displayLarge">
        Login
      </Text>

      {/* >email */}
      <View className="flex-col w-full gap-1 px-6">
        <Controller
          control={control}
          rules={{
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Email"
              mode="outlined"
              error={errors.email}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text className="text-red-700" variant="bodyMedium">
            Email should be a valid email.
          </Text>
        )}
      </View>

      {/* >password */}
      <View className="flex-col w-full gap-1 px-6">
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 6,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Password"
              mode="outlined"
              secureTextEntry
              error={errors.password}
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text className="text-red-700" variant="bodyMedium">
            Password should be at least 6 characters.
          </Text>
        )}
      </View>

      {/* >forgot password */}
      <Link
        href="/auth/forgot-password/confirm-email"
        className="w-full pr-6 text-right underline"
      >
        <Text variant="labelLarge">Forgot Password?</Text>
      </Link>

      {/* >login button */}
      <Button
        // contentStyle={{ flexDirection: "row-reverse" }}
        mode="contained-tonal"
        onPress={handleSubmit(login)}
        disabled={isSubmitting}
        loading={isSubmitting}
      >
        <Text variant="labelLarge">Login</Text>
      </Button>

      {/* >root error */}
      {errors.root && (
        <Text className="text-red-700" variant="bodyMedium">
          {errors.root.message}
        </Text>
      )}

      {/* >register link */}
      <Link href="/auth/register" className="underline ">
        <Text variant="labelLarge">Register</Text>
      </Link>
    </View>
  );
}
