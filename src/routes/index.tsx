import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../pages/home";
import BookChapter from "../pages/book-chapter";
import OldBooks from "../pages/oldBooks";
import NewBooks from "../pages/newBooks";
import Text from "../pages/text";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#555963' }
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OldBooks" component={OldBooks} />
        <Stack.Screen name="NewBooks" component={NewBooks} />
        <Stack.Screen name="BookChapter" component={BookChapter} />
        <Stack.Screen name="Text" component={Text} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
