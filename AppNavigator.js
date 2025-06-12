import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import InicioScreen from "./screens/InicioScreen";
import NoticiasScreen from "./screens/NoticiasScreen"; // Esta ahora se llama Agenda
import CalendarioScreen from "./screens/CalendarioScreen";
import CampusVirtualScreen from "./screens/CampusVirtualScreen";
import SIUGuaraniScreen from "./screens/SIUGuaraniScreen";
import InfoScreen from "./screens/InfoScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "Inicio":
              iconName = "home-outline";
              break;
            case "Agenda":
              iconName = "calendar-outline";
              break;
            case "Calendario":
              iconName = "calendar-sharp";
              break;
            case "Campus Virtual":
              iconName = "school-outline";
              break;
            case "Guaraní":
              iconName = "document-text-outline";
              break;
            case "Info":
              iconName = "information-circle-outline";
              break;
            default:
              iconName = "ellipse-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#00588B",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Inicio" component={InicioScreen} />
      <Tab.Screen name="Agenda" component={NoticiasScreen} />
      <Tab.Screen name="Calendario" component={CalendarioScreen} />
      <Tab.Screen name="Campus Virtual" component={CampusVirtualScreen} />
      <Tab.Screen name="Guaraní" component={SIUGuaraniScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
    </Tab.Navigator>
  );
}
