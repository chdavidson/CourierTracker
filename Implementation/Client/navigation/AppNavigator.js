import React, { useContext } from "react";
import firebase from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";
import { COLORS, FONTS, icons } from "../Constants"

import { useTheme, themeColor } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";
//Screens
import Home from "../Screens/Home";
import Settings from "../Screens/Settings";
import ReportDetailScreen from "../Screens/ReportDetailScreen";
import Report from "../Screens/Report";
import RecordData from "../Screens/RecordData";
import HomeScreen from "../Screens/HomeScreen";
import About from "../Screens/About";
import ProfileScreen from "../Screens/ProfileScreen";
import Loading from "../Screens/utils/Loading";
import LandingScreen from "../Screens/LandingScreen"
import AccountSettingsScreen from "../Screens/AccountSettingsScreen"
import ReportScreen from "../Screens/ReportScreen"
import RecordItemScreen from "../Screens/RecordItemScreen"

import { LinearGradient } from 'expo-linear-gradient';

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
      <MainStack.Screen name="Landing Page" component={HomeScreen}/>
      <MainStack.Screen name="Profile" component={ProfileScreen} />
      <MainStack.Screen name="Reports" component={ReportDetailScreen} />
      <MainStack.Screen name="Record" component={RecordItemScreen} />
      <MainStack.Screen name="RecordData" component={RecordData} />
              
    </MainStack.Navigator>
  );
};



const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        style: {
          borderTopWidth: 1,
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
        },
      }}
    >


      <Tabs.Screen
        name="Home"
        component={HomeScreen}
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
        component={ReportDetailScreen}
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
      <Tabs.Screen
        name="RecordData"
        component={RecordData}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="RecordData" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"ios-barcode-outline"} />
          ),
        }}
      />
              
       
    </Tabs.Navigator>
  );
};


// const Tab = createBottomTabNavigator()
// const TabBarCustomButton = ({children, onPress}) => {
//     return(
//         <TouchableOpacity
//             style={{
//                 top: -30,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 paddingTop: 30,
//                 ...styles.shadow
//             }}
//             onPress={onPress}
//          >
//              <LinearGradient
//                 colors={[COLORS.primary, COLORS.secondary]}
//                 style={{
//                     width: 70,
//                     height: 70,
//                     borderRadius: 35
//                 }}
//              >
//                  {children}
//              </LinearGradient>
//          </TouchableOpacity>
//     )
// }

// const Tabs = () => {
//     return (
//         <Tab.Navigator 
//             tabBarOptions={{
//                 showLabel: false,
//                 style: {
//                     position: 'absolute',
//                     bottom: 0,
//                     left: 0,
//                     right: 0,
//                     elevation: 0,
//                     backgroundColor: COLORS.white,
//                     borderTopColor: "transparent"
//                 }
//             }}
//             screenOptions={{
//                 headerShown: null
//             }}
//         >
//             <Tab.Screen
//                 name="Home"
//                 component={Home}
//                 options={{
//                     tabBarIcon: ({focused}) => (
//                         <View style={{alignItems: 'center',
//                             justifyContent: 'center',
//                             paddingTop: 20
//                         }}>
//                         <Image 
//                             source={icons.home}
//                             resizeMode="contain"
//                             style={{
//                                 width: 30,
//                                 height: 30,
//                                 tintColor: focused ? COLORS.primary
//                                 : COLORS.black
//                             }}
                    
//                          />
//                          <Text style={{color : focused ? COLORS.primary : COLORS.black,
//                             ...FONTS.body5
//                          }}>Home</Text>

//                         </View>
//                     )
//                 }}
//             />
//             <Tab.Screen
//                 name="Portfolio"
//                 component={Report}
//                 options={{
//                     tabBarIcon: ({focused}) => (
//                         <View style={{alignItems: 'center',
//                             justifyContent: 'center',
//                             paddingTop: 20
//                         }}>
//                         <Image 
//                             source={icons.pie_chart}
//                             resizeMode="contain"
//                             style={{
//                                 width: 30,
//                                 height: 30,
//                                 tintColor: focused ? COLORS.primary
//                                 : COLORS.black
//                             }}
                    
//                          />
//                          <Text style={{color : focused ? COLORS.primary : COLORS.black,
//                             ...FONTS.body5
//                          }}>Reports</Text>

//                         </View>
//                     )
//                 }}
//             />
//             <Tab.Screen
//                 name="Transaction"
//                 component={RecordData}
//                 options={{
//                     tabBarIcon: ({focused}) => (
//                         <Image
//                             source={icons.transaction}
//                             resizeMode= 'contain'
//                             style={{
//                                 width: 30,
//                                 height: 30,
//                                 tintColor: COLORS.white,
//                             }} />
//                     ),
//                     tabBarButton: (props) => (
//                         <TabBarCustomButton {...props}/>
//                     )
//                 }}
                
//             />
//             <Tab.Screen
//                 name="Details"
//                 component={Detail}
//                 options={{
//                     tabBarIcon: ({focused}) => (
//                         <View style={{alignItems: 'center',
//                             justifyContent: 'center',
//                             paddingTop: 20
//                         }}>
//                         <Image 
//                             source={icons.line_graph}
//                             resizeMode="contain"
//                             style={{
//                                 width: 30,
//                                 height: 30,
//                                 tintColor: focused ? COLORS.primary
//                                 : COLORS.black
//                             }}
                    
//                          />
//                          <Text style={{color : focused ? COLORS.primary : COLORS.black,
//                             ...FONTS.body5
//                          }}>Stats</Text>

//                         </View>
//                     )
//                 }}
//             />
//             <Tab.Screen
//                 name="Settings"
//                 component={Settings}
//                 options={{
//                     tabBarIcon: ({focused}) => (
//                         <View style={{alignItems: 'center',
//                             justifyContent: 'center',
//                             paddingTop: 20
//                         }}>
//                         <Image 
//                             source={icons.settings}
//                             resizeMode="contain"
//                             style={{
//                                 width: 30,
//                                 height: 30,
//                                 tintColor: focused ? COLORS.primary
//                                 : COLORS.black
//                             }}
                    
//                          />
//                          <Text style={{color : focused ? COLORS.primary : COLORS.black,
//                             ...FONTS.body5
//                          }}>Settings</Text>

//                         </View>
//                     )
//                 }}
//             />
//         </Tab.Navigator>
//     )
// }

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
