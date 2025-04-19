import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './Screens/Login';
import Counter from './Screens/Counter';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Counter"
        component={Counter}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
