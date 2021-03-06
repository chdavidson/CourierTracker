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

//Screens
import Settings from "../Screens/Settings";
import ReportDetailScreen from "../Screens/ReportDetailScreen";
import RecordIncome from "../Screens/RecordIncome";

import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import Loading from "../Screens/utils/Loading";
import ReportScreen from "../Screens/ReportScreen"
import RecordExpense from "../Screens/RecordExpense"


import { LinearGradient } from 'expo-linear-gradient';

// Auth Screens
import Login from "../Screens/auth/Login";
import Register from "../Screens/auth/Register";
import ForgetPassword from "../Screens/auth/ForgetPassword";
import { AuthContext } from "../provider/AuthProvider";
import RecordLandingScreen from "../Screens/RecordLandingScreen";
import CameraComponent from "../components/CameraComponent";

import { DbContext } from "../provider/DbProvider"

// Better put your these secret keys in .env file
export const firebaseConfig = {
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
    const db = useContext(DbContext)
    var currentUser = null;
    if(currentUser == null){
    currentUser = db.currentUser
    console.log("current user from app navigator: " + currentUser)} 
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {currentUser ? <MainStack.Screen name="Tabs" component={Tabs} /> :  <MainStack.Screen name="Loading" component={Loading} />}
      {currentUser ? <MainStack.Screen name="Landing Page" component={HomeScreen}/> : <MainStack.Screen name="Loading2" component={Loading} />}
      {currentUser ? <MainStack.Screen name="Profile" component={ProfileScreen} /> : <MainStack.Screen name="Loading3" component={Loading} />}
      {currentUser ? <MainStack.Screen name="Reports" component={ReportDetailScreen} /> : <MainStack.Screen name="Loading4" component={Loading} />}
      {currentUser ? <MainStack.Screen name="RecordLandingScreen" component={RecordLandingScreen}/> : <MainStack.Screen name="Loading5" component={Loading} />}
      
      {currentUser ? <MainStack.Screen name="RecordIncome" component={RecordIncome} /> : <MainStack.Screen name="Loading6" component={Loading} />}
      {currentUser ? <MainStack.Screen name="RecordExpense" component={RecordExpense} /> : <MainStack.Screen name="Loading7" component={Loading} />}
      <MainStack.Screen name="CameraComponent" component={CameraComponent} />

      {currentUser ? <MainStack.Screen name="ReportScreen" component={ReportScreen} /> : <MainStack.Screen name="Loading8" component={Loading} /> }
      {currentUser ? <MainStack.Screen name="Settings" component={Settings} /> : <MainStack.Screen name="Loading9" component={Loading} /> } 
              
    </MainStack.Navigator>
  );
};



const Tab = createBottomTabNavigator()
const TabBarCustomButton = ({children, onPress}) => {
    return(
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 30,
                ...styles.shadow
            }}
            onPress={onPress}
         >
             <LinearGradient
                colors={[COLORS.primary, COLORS.secondary]}
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35
                }}
             >
                 {children}
             </LinearGradient>
         </TouchableOpacity>
    )
}

const Tabs = () => {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: "transparent"
                }
            }}
            screenOptions={{
                headerShown: null
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: 20
                        }}>
                        <Image 
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary
                                : COLORS.black
                            }}
                    
                         />
                         <Text style={{color : focused ? COLORS.primary : COLORS.black,
                            ...FONTS.body5
                         }}>Home</Text>

                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: 20
                        }}>
                        <Image 
                            source={icons.pie_chart}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary
                                : COLORS.black
                            }}
                    
                         />
                         <Text style={{color : focused ? COLORS.primary : COLORS.black,
                            ...FONTS.body5
                         }}>Reports</Text>

                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Transaction"
                // component={RecordData}
                component={RecordLandingScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.transaction}
                            resizeMode= 'contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: COLORS.white,
                            }} />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton {...props}/>
                    )
                }}
                
            />
            <Tab.Screen
                name="ReportScreen"
                component={ReportScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: 20
                        }}>
                        <Image 
                            source={icons.line_graph}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary
                                : COLORS.black
                            }}
                    
                         />
                         <Text style={{color : focused ? COLORS.primary : COLORS.black,
                            ...FONTS.body5
                         }}>Stats</Text>

                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: 20
                        }}>
                        <Image 
                            source={icons.settings}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary
                                : COLORS.black
                            }}
                    
                         />
                         <Text style={{color : focused ? COLORS.primary : COLORS.black,
                            ...FONTS.body5
                         }}>Settings</Text>

                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

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

const styles = StyleSheet.create({
  shadow: {
      shadowColor: COLORS.primary,
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5
  }
})
