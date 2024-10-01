import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { Link, router } from "expo-router";

export default function ResetPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const resetPassword = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    router.push("/auth/login");
  };

  return (
    <View className="items-center justify-center flex-1 gap-6 bg-violet-50">
      {/* >title */}
      <Text className="text-gray-800" variant="displayMedium">
        Reset Password
      </Text>

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

      {/* >confirmPassword */}
      <View className="flex-col w-full gap-1 px-6">
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 6,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Confirm Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Confirm Password"
              mode="outlined"
              secureTextEntry
              error={errors.confirmPassword}
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && (
          <Text className="text-red-700" variant="bodyMedium">
            Confirm password should be at least 6 characters.
          </Text>
        )}
      </View>

      {/* >reset password button */}
      <Button
        // contentStyle={{ flexDirection: "row-reverse" }}
        mode="contained-tonal"
        onPress={handleSubmit(resetPassword)}
        disabled={isSubmitting}
        loading={isSubmitting}
      >
        <Text variant="labelLarge">Reset Password</Text>
      </Button>

      {/* >login link */}
      <Link href="/auth/login" className="underline ">
        <Text variant="labelLarge">Login</Text>
      </Link>
    </View>
  );
}
