import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import logosib from '../../../../assets/SIB_witut_txt_bgrmve.png';
import { useNavigation } from '@react-navigation/native'



const Welcome = () => {
  const navigationLogin = useNavigation();
  const handleLoginPress = () => {
    navigationLogin.navigate('Login');
    console.log('Login Pressed.. Moving to Login Page');
  };
  return (
    <View style={styles.container}> 
        <Image style={styles.logosib} source={logosib}/>
        <TouchableOpacity style={styles.button} onPress={(handleLoginPress) } >
            <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>
      </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1F184C',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    },
  logosib: {
    width: '65%',
    height: '50%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 60,
    marginTop: 10,
    borderRadius: 20,
 },
buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
 },
})