import React from "react";
import { View } from "react-native";
import { Avatar, Button, Text, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

export default function Account() {
  return (
    <View className="items-center flex-1 justify-evenly">
      <DPContainer />
      <InfoContainer />
      <PasswordContainer />
    </View>
  );
}

function DPContainer() {
  return (
    <View className="items-center justify-center space-y-2">
      <Avatar.Image
        size={120}
        source={require("../../assets/dp/Jubayer-2.jpg")}
      />
      <Button
        className="w-40"
        contentStyle={{ flexDirection: "row-reverse" }}
        mode="contained-tonal"
        onPress={() => console.log("Upload dp...")}
      >
        <Text variant="labelLarge">Upload Image</Text>
      </Button>
    </View>
  );
}

function InfoContainer() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "Abdullah Al Jubayer",
      email: "imjubayer08@gmail.com",
      phone: "01980124132",
    },
  });
  const updateInfo = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
  };

  return (
    <View className="items-center w-full space-y-4">
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

      {/* >update info button */}
      <Button
        // contentStyle={{ flexDirection: "row-reverse" }}
        className="w-40"
        mode="contained-tonal"
        onPress={handleSubmit(updateInfo)}
        disabled={isSubmitting}
        loading={isSubmitting}
      >
        <Text variant="labelLarge">Update Info</Text>
      </Button>
    </View>
  );
}

function PasswordContainer() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const changePassword = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    reset();
  };

  return (
    <View className="items-center w-full space-y-4">
      {/* >oldPassword */}
      <View className="flex-col w-full gap-1 px-6">
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 6,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Old Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Old Password"
              mode="outlined"
              secureTextEntry
              error={errors.oldPassword}
            />
          )}
          name="oldPassword"
        />
        {errors.oldPassword && (
          <Text className="text-red-700" variant="bodyMedium">
            Password should be at least 6 characters.
          </Text>
        )}
      </View>

      {/* >newPassword */}
      <View className="flex-col w-full gap-1 px-6">
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 6,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="New Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="New Password"
              mode="outlined"
              secureTextEntry
              error={errors.newPassword}
            />
          )}
          name="newPassword"
        />
        {errors.newPassword && (
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

      {/* >change password button */}
      <Button
        // contentStyle={{ flexDirection: "row-reverse" }}
        className="w-40"
        mode="contained-tonal"
        onPress={handleSubmit(changePassword)}
        disabled={isSubmitting}
        loading={isSubmitting}
      >
        <Text variant="labelLarge">Change Password</Text>
      </Button>
    </View>
  );
}
