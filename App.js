import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Screen_01 from "./screens/Screen_01";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Screen_01"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Screen_01" component={Screen_01} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
