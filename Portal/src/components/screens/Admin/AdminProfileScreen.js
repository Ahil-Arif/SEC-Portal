import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import loginbg from '.../../../assets/loginbg.png'
// Import the profile image from the assets folder
//import ProfileImage from '../'; // Adjust the path to match the location of your image file

const AdminProfileScreen = ({ navigation }) => {
  const user = {
    name: 'IT',
    email: 'helpdesk@sib.com.pk',
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            // Perform logout action (e.g., clear authentication state)
            // Navigate to the login screen or perform any other required actions
            navigation.navigate('Welcome'); // Navigate to the login screen after logout
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
<<<<<<< HEAD:Portal/src/components/screens/Admin/AdminProfileScreen.js
    <View style={styles.container}>
      {/* Display the profile image from the local folder */}
      {/* <Image source={ProfileImage} style={styles.profileImage} /> */}
=======
    <View style={styles.container} >
      <Image source={loginbg} style={styles.loginbg} />
    <View style={styles.container1}>
      
      <Image source={ProfileImage} style={styles.profileImage} />
>>>>>>> 40f594b2a85f3f6daa4c5ad480cd5668d9cf131b:Portal/src/components/screens/ExtraMains/AdminProfileScreen.js

      {/* User name */}
      <Text style={styles.name}>{user.name}</Text>

      {/* Email address */}
      <Text style={styles.email}>{user.email}</Text>

      {/* Logout button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'pink'
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F184C',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white'
  },
  email: {
    fontSize: 14,
    marginBottom: 20,
    color:'white',
  },
  logoutButton: {
<<<<<<< HEAD:Portal/src/components/screens/Admin/AdminProfileScreen.js
    backgroundColor: 'white',
=======
    backgroundColor: 'blue',
>>>>>>> 40f594b2a85f3f6daa4c5ad480cd5668d9cf131b:Portal/src/components/screens/ExtraMains/AdminProfileScreen.js
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
<<<<<<< HEAD:Portal/src/components/screens/Admin/AdminProfileScreen.js
    color: 'black',
    fontSize: 16,
=======
    color: '#fff',
    fontSize: 14,
>>>>>>> 40f594b2a85f3f6daa4c5ad480cd5668d9cf131b:Portal/src/components/screens/ExtraMains/AdminProfileScreen.js
  },
  loginbg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: -1,
    opacity: 0.9,
  }
});

export default AdminProfileScreen;
