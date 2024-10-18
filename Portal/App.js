import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/components/screens/User/Welcome';
import Login from './src/components/screens/User/Login';
//import Signup from './src/components/screens/Signup';
import MainScreen from './src/components/screens/User/MainScreen';
// import Admin from './src/components/screens/Admin';
import Dashboard from './src/components/screens/User/Dashboard';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.shakal}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown:false}}
            />
        <Stack.Screen 
          name='Login'
          component={Login}
          options={{headerShown:false}}/>
          <Stack.Screen 
          name='MainScreen'
          component={MainScreen}
          options={{headerShown:false}}/>
        {/* <Stack.Screen 
          name='Signup'
          component={Signup}
          options={{title:'Register'}}/> */}
          <Stack.Screen 
          name='Dashboard'
          component={Dashboard}
          options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  shakal:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    //margin: 5,
  },
});
