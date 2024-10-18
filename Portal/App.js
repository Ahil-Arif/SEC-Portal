import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<<<<<<< HEAD
import Welcome from './src/components/screens/User/Welcome';
import Login from './src/components/screens/User/Login';
//import Signup from './src/components/screens/Signup';
import MainScreen from './src/components/screens/User/MainScreen';
// import Admin from './src/components/screens/Admin';
import Dashboard from './src/components/screens/User/Dashboard';
=======
import Welcome from './src/components/screens/Welcome';
import Login from './src/components/screens/Login';
import Verification from './src/components/screens/Verification';
import Signup from './src/components/screens/Signup';
import MainScreen from './src/components/screens/MainScreen';
import Dashboard from './src/components/screens/Dashboard';
>>>>>>> 40f594b2a85f3f6daa4c5ad480cd5668d9cf131b


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.shakal}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown:false}}/>
        <Stack.Screen 
          name='Login'
          component={Login}
<<<<<<< HEAD
          options={{headerShown:false}}/>
=======
          options={{headerTitle:'',headerTransparent:true}}/>
          <Stack.Screen 
          name='Verification'
          component={Verification}
          options={{headerTitle:'',headerTransparent:true}}/>
>>>>>>> 40f594b2a85f3f6daa4c5ad480cd5668d9cf131b
          <Stack.Screen 
          name='MainScreen'
          component={MainScreen}
          options={{headerShown:false}}/>
        {/* <Stack.Screen 
          name='Signup'
          component={Signup}
<<<<<<< HEAD
          options={{title:'Register'}}/> */}
=======
          options={{headerTitle:'',headerTransparent:true}}/>
>>>>>>> 40f594b2a85f3f6daa4c5ad480cd5668d9cf131b
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
