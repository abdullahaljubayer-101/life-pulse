import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { Link, router } from "expo-router";

export default function ConfirmEmail() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const confirmEmail = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    router.push("/auth/forgot-password/confirm-otp");
  };

  return (
    <View className="items-center justify-center flex-1 gap-6 bg-violet-50">
      {/* >title */}
      <Text className="text-gray-800" variant="displayMedium">
        Forgot Password
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

      {/* >confirm email button */}
      <Button
        // contentStyle={{ flexDirection: "row-reverse" }}
        mode="contained-tonal"
        onPress={handleSubmit(confirmEmail)}
        disabled={isSubmitting}
        loading={isSubmitting}
      >
        <Text variant="labelLarge">Confirm Email</Text>
      </Button>

      {/* >login link */}
      <Link href="/auth/login" className="underline ">
        <Text variant="labelLarge">Login</Text>
      </Link>
    </View>
  );
}
