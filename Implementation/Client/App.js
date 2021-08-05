
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import 'react-native-gesture-handler';


import LogInScreen from './Screens/LogInScreen';
import ProfileScreen from './Screens/ProfileScreen';
import ResetPasswordScreen from './Screens/ResetPasswordScreen';
import CreateAccountScreen from './Screens/CreateAccountScreen';
import LandingScreen from './Screens/LandingScreen';
import AccountSettingsScreen from './Screens/AccountSettingsScreen';
import ReportScreen from './Screens/ReportScreen';
import RecordItemScreen from './Screens/RecordItemScreen';
import MainContainer from './Screens/MainContainer'


export default function App() {
  const [testData, setTestData] = useState("placeholder")
  return (
    <MainContainer />
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
