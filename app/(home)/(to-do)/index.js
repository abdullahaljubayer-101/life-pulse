import { router } from "expo-router";
import { ColorSchemeStore } from "nativewind/dist/style-sheet/color-scheme";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Checkbox, FAB, Text } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";

export default function ToDo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/todo/2`);
      const result = await res.json();
      setTodos(result);
    } catch (e) {
      console.log(e);
    }
  };

  const setChecked = async (todo_id) => {
    try {
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/todoChecked/${todo_id}`
      );
      const result = await res.json();
      getTodos();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTodo = async (todo_id) => {
    try {
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/todoDelete/${todo_id}`
      );
      const result = await res.json();
      getTodos();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View className="relative flex-1">
      <View>
        {todos.map((todo) => (
          // <List key={todo.id} body={todo.body} is_checked={todo.is_checked} />
          <View
            key={todo.id}
            className="flex flex-row items-center justify-between mr-2"
          >
            <View className="flex flex-row items-center justify-between">
              <Checkbox
                status={todo.is_checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(todo.id);
                }}
              />
              <Text>{todo.body}</Text>
            </View>
            <Feather
              name="delete"
              size={20}
              color="gray"
              onPress={() => {
                deleteTodo(todo.id);
              }}
            />
          </View>
        ))}
      </View>

      {/* <Button mode="contained-tonal" onPress={getTodos}>
        <Text variant="labelLarge">Reload</Text>
      </Button> */}

      <FAB
        className="absolute z-50 bottom-4 right-4"
        icon="plus"
        onPress={() => router.push("/add-to-do")}
      />
    </View>
  );
}

function List({ key, body, is_checked }) {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(is_checked);
  }, []);

  return (
    <View key={key} className="flex flex-row items-center">
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text>{body}</Text>
    </View>
  );
}
