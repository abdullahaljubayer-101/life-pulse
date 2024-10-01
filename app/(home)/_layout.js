import { Drawer } from "expo-router/drawer";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: "Home",
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="account"
        options={{
          headerTitle: "Account",
          drawerLabel: "Account",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-box-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="(to-do)"
        options={{
          headerTitle: "To-Do",
          drawerLabel: "To-Do",
          drawerIcon: ({ color }) => (
            <Octicons name="tasklist" size={24} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
