import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { Link } from "expo-router";

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });
  const register = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
  };

  return (
    <View className="items-center justify-center flex-1 gap-6 bg-violet-50">
      {/* >title */}
      <Text className="text-gray-800" variant="displayLarge">
        Register
      </Text>

      {/* >name */}
      <View className="flex-col w-full gap-1 px-6">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Name"
              mode="outlined"
              error={errors.name}
            />
          )}
          name="name"
        />
        {errors.name && (
          <Text className="text-red-700" variant="bodyMedium">
            Name is required.
          </Text>
        )}
      </View>

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

      {/* >phone */}
      <View className="flex-col w-full gap-1 px-6">
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 11,
            minLength: 11,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Phone"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Phone"
              mode="outlined"
              error={errors.phone}
            />
          )}
          name="phone"
        />
        {errors.phone && (
          <Text className="text-red-700" variant="bodyMedium">
            Phone should be a valid phone.
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

      {/* >register button */}
      <Button
        // contentStyle={{ flexDirection: "row-reverse" }}
        mode="contained-tonal"
        onPress={handleSubmit(register)}
        disabled={isSubmitting}
        loading={isSubmitting}
      >
        <Text variant="labelLarge">Register</Text>
      </Button>

      {/* >login link */}
      <Link href="/auth/login" className="underline ">
        <Text variant="labelLarge">Register</Text>
      </Link>
    </View>
  );
}
