<<<<<<< HEAD:Portal/src/components/screens/User/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

// Import the profile image from the assets folder
import ProfileImage from '../../../../assets/icon.png'; // Adjust the path to match the location of your image file

const ProfileScreen = ({ navigation }) => {
  // Sample user data (replace with actual user data)
  const user = {
    name: 'Other User',
    email: 'helpdesk@sib.com.pk',
=======
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginbg from '../../../assets/loginbg.png';
import ProfileImage from '../../../images/sccthrewurcloths-lozge7.jpeg'; 

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadName = async () => {
      try {
        const savedName = await AsyncStorage.getItem('userName');
        if (savedName) {
          setName(savedName);
        } else {
          setName(''); 
        }
      } catch (error) {
        console.error('Failed to load name:', error);
      }
    };

    loadName();
  }, []);

  const handleSaveName = async () => {
    try {
      await AsyncStorage.setItem('userName', name);
      Alert.alert('Success', 'Your name has been updated.');
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save name:', error);
      Alert.alert('Error', 'Failed to update your name.');
    }
>>>>>>> 40f594b2a85f3f6daa4c5ad480cd5668d9cf131b:Portal/src/components/screens/ProfileScreen.js
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
            navigation.navigate('Welcome'); 
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Image style={styles.loginbg} source={loginbg} />
      <View style={styles.container1}>
        <Image source={ProfileImage} style={styles.profileImage} />

        {isEditing ? (
          <TextInput
            style={styles.nameInput}
            value={name}
            onChangeText={setName}
          />
        ) : (
          <Text style={styles.name}>{name}</Text>
        )}

        {isEditing ? (
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveName}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
            <Text style={styles.editButtonText}>Edit Name</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  nameInput: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: '80%',
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    color:'white',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
<<<<<<< HEAD:Portal/src/components/screens/User/ProfileScreen.js
    backgroundColor: 'white',
=======
    backgroundColor: 'blue',
>>>>>>> 40f594b2a85f3f6daa4c5ad480cd5668d9cf131b:Portal/src/components/screens/ProfileScreen.js
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'black',
    fontSize: 16,
  },
  loginbg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: -1,
    opacity: 0.9,
  }
});

export default ProfileScreen;