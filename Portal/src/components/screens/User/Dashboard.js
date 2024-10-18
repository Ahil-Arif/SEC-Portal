import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import RequestScreen from '../Admin/RequestScreen';
import AdminProfileScreen from '../Admin/AdminProfileScreen';
import ReportedComplains from '../Admin/ReportedComplains';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Request') {
            iconName = 'person-add';
          } else if (route.name === 'Complains') {
            iconName = 'calendar-outline';
          } else if (route.name === 'Profile') {
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
      <Tab.Screen name="Request" component={RequestScreen} options={{headerShown:false}} />
      <Tab.Screen name="Complains" component={ReportedComplains} />
      <Tab.Screen name="Profile" component={AdminProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default Dashboard;
