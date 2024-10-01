import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { Link, router } from "expo-router";

export default function ConfirmOTP() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      otp: "",
    },
  });
  const confirmOTP = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    router.push("/auth/forgot-password/reset-password");
  };

  return (
    <View className="items-center justify-center flex-1 gap-6 bg-violet-50">
      {/* >title */}
      <Text className="text-gray-800" variant="displayMedium">
        Confirm OTP
      </Text>

      {/* >otp */}
      <View className="flex-col w-full gap-1 px-6">
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 6,
            minLength: 6,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="OTP"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="OTP"
              mode="outlined"
              error={errors.otp}
            />
          )}
          name="otp"
        />
        {errors.otp && (
          <Text className="text-red-700" variant="bodyMedium">
            OTP should be contained 6 digits.
          </Text>
        )}
      </View>

      {/* >confirm OTP button */}
      <Button
        // contentStyle={{ flexDirection: "row-reverse" }}
        mode="contained-tonal"
        onPress={handleSubmit(confirmOTP)}
        disabled={isSubmitting}
        loading={isSubmitting}
      >
        <Text variant="labelLarge">Confirm OTP</Text>
      </Button>

      {/* >login link */}
      <Link href="/auth/login" className="underline ">
        <Text variant="labelLarge">Login</Text>
      </Link>
    </View>
  );
}
