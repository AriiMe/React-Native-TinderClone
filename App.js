import React from 'react';
import StackNavigator from './StackNavigator';
import { AuthProvider } from './hooks/useAuth';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
