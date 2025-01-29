import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LevelSelectionScreen from '../screens/levelselectionscreen';
import LevelScreen from '../screens/levelscreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LevelSelection"
          component={LevelSelectionScreen}
          options={{ title: 'Select Level' }}
        />
        <Stack.Screen
          name="Level"
          component={LevelScreen}
          options={({ route }) => ({ title: `Level ${route.params.level.level}` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;