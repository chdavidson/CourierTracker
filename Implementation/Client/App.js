
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogInScreen from './Screens/LogInScreen';
import ProfileScreen from './Screens/ProfileScreen';
import ResetPasswordScreen from './Screens/ResetPasswordScreen';
import CreateAccountScreen from './Screens/CreateAccountScreen';
import LandingScreen from './Screens/LandingScreen';
import AccountSettingsScreen from './Screens/AccountSettingsScreen';
import ReportScreen from './Screens/ReportScreen';
import RecordItemScreen from './Screens/RecordItemScreen';
import MainContainer from './Screens/MainContainer'

const Stack = createStackNavigator();

export default function App() {
  const [testData, setTestData] = useState("placeholder")
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Sign in" component={LogInScreen} />
              <Stack.Screen name="Reset Password" component={ResetPasswordScreen} />
              <Stack.Screen name="Create Account" component={CreateAccountScreen} />
              <Stack.Screen name="Landing Page" component={LandingScreen}/>
              <Stack.Screen
                  name="Profile"
                  component={MainContainer}
                  options={{ title: "Profile"}}
              />
              <Stack.Screen name="Profile Settings" component={AccountSettingsScreen} />
              <Stack.Screen name="Reports" component={ReportScreen} />
              <Stack.Screen name="Record" component={RecordItemScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
