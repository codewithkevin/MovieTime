import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

//Screens
import Favorite from './../screens/Favorite';
import Settings from './../screens/Settings';
import HomeScreen from './../screens/HomeScreen';

export default function Bottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarIcon: makeIconRender("home"), headerShown: false }}
      />
      <Tab.Screen
        name="favorite"
        component={Favorite}
        options={{
          tabBarIcon: makeIconRender("robot-love-outline"),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: makeIconRender("movie-settings"),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
