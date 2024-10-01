import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Button, Text } from "react-native-paper";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "To-Do",
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="task-alt" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="group-to-do"
        options={{
          tabBarLabel: "Group To-Do",
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="tasks" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create-group"
        options={{
          tabBarLabel: "Create Group",
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({ color }) => (
            <AntDesign name="addusergroup" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add-to-do"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="add-group-to-do"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
