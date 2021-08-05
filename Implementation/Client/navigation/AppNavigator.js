import React, { useContext } from "react";
import firebase from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme, themeColor } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";
//Screens
import Home from "../Screens/Home";
import SecondScreen from "../Screens/SecondScreen";
import About from "../Screens/About";
import ProfileScreen from "../Screens/ProfileScreen";
import Loading from "../Screens/utils/Loading";
import LandingScreen from "../Screens/LandingScreen"
import AccountSettingsScreen from "../Screens/AccountSettingsScreen"
import ReportScreen from "../Screens/ReportScreen"
import RecordItemScreen from "../Screens/RecordItemScreen"


// Auth Screens
import Login from "../Screens/auth/Login";
import Register from "../Screens/auth/Register";
import ForgetPassword from "../Screens/auth/ForgetPassword";
import { AuthContext } from "../provider/AuthProvider";

// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: "AIzaSyCg3gv56sdm-8BlaO1o37XtYlyO7L-rF7w",
  authDomain: "authtest-caa8d.firebaseapp.com",
  projectId: "authtest-caa8d",
  storageBucket: "authtest-caa8d.appspot.com",
  messagingSenderId: "849204028651",
  appId: "1:849204028651:web:cc77d74655be7d714b8aae",
  measurementId: "G-8DGRKK9YDQ"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

const AuthStack = createStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
      <MainStack.Screen name="Landing Page" component={LandingScreen}/>
        <MainStack.Screen name="Profile Settings" component={AccountSettingsScreen} />
        <MainStack.Screen name="Reports" component={ReportScreen} />
        <MainStack.Screen name="Record" component={RecordItemScreen} />
              
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      tabBarOptions={{
        style: {
          borderTopWidth: 1,
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={LandingScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"md-home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Profile" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"person"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Reports"
        component={ReportScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Reports" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"ios-trending-up"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Record"
        component={RecordItemScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Record" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"ios-barcode-outline"} />
          ),
        }}
      />
              
       
    </Tabs.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
