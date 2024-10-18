import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ComplainScreen from './ComplainScreen';
import AddScreen from './AddScreen';
//import CalenderScreen from './ReportedComplains';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Complain') {
            iconName = 'book-outline';
          } else if (route.name === 'Add') {
            iconName = 'open';
          } 
          // else if (route.name === 'Calender') {
          //   iconName = 'calendar';}
           else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#FFC600',
        tabBarStyle: {
          backgroundColor: '#1f184c', // Simple solid color background
          borderTopWidth: 0,
          elevation: 5, // Small elevation for shadow
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Tab.Screen name="Complain" component={ComplainScreen} options={{headerShown: false}} />
      <Tab.Screen name="Add" component={AddScreen} options={{headerShown: false}} />
      {/* <Tab.Screen name="Calender" component={CalenderScreen} /> */}
      <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

export default MainScreen;
