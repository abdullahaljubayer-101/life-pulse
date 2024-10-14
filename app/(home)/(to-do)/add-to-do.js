import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { Link, router } from "expo-router";
import { ColorSchemeStore } from "nativewind/dist/style-sheet/color-scheme";

export default function AddToDo() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      todo: "",
      user_id: 1,
    },
  });
  const addTodo = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/todo`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, user_id: 2 }),
      });
      const result = await res.json();
      router.push("/(home)/(to-do)");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View className="items-center justify-center flex-1 gap-6 bg-violet-50">
      {/* >todo */}
      <View className="flex-col w-full gap-1 px-6">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Todo"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Todo"
              mode="outlined"
              error={errors.todo}
            />
          )}
          name="todo"
        />
        {errors.todo && (
          <Text className="text-red-700" variant="bodyMedium">
            Please enter a todo!
          </Text>
        )}
      </View>

      {/* >add todo button */}
      <Button
        // contentStyle={{ flexDirection: "row-reverse" }}
        mode="contained-tonal"
        onPress={handleSubmit(addTodo)}
        disabled={isSubmitting}
        loading={isSubmitting}
      >
        <Text variant="labelLarge">Add</Text>
      </Button>
    </View>
  );
}
