import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const navigation = useNavigation();

  const handleLoginPress = () => {
    if (!name || !password || !selectedOption) {
      Alert.alert('Error', 'Please fill all the fields before submitting.');
      return;
    }

    if (name === 'user' && password === '123456') {
      console.log('Welcome to user dashboard');
      navigation.navigate('MainScreen', { option: selectedOption });
    } else if (name === 'admin' && password === 'admin123') {
      switch (selectedOption) {
        case 'IT':
          console.log('Welcome to Admin Dashboard');
          navigation.navigate('Dashboard');
          break;
        case 'Corporate Solutions':
        case 'Health & Life Solutions':
        case 'HR & Admin':
        case 'Finance':
          console.log('Welcome to user dashboard');
          navigation.navigate('MainScreen', { option: selectedOption });
          break;
        default:
          Alert.alert('Error', 'Invalid selection.');
          break;
      }
    } else {
      Alert.alert('Error', 'Invalid username or password.');
    }

    setName('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN HERE!</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="white"  // Placeholder text color
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"  // Placeholder text color
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <Picker
        selectedValue={selectedOption}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
        dropdownIconColor="white"
        itemStyle={styles.pickerItem}  // Picker item style
      >
        <Picker.Item label="Select an Option" value="" />
        <Picker.Item label="Corporate Solutions" value="Corporate Solutions" />
        <Picker.Item label="Health & Life Solutions" value="Health & Life Solutions" />
        <Picker.Item label="HR & Admin" value="HR & Admin" />
        <Picker.Item label="Finance" value="Finance" />
        <Picker.Item label="IT" value="IT" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#1F184C',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'white',
    borderWidth: 3,
    marginBottom: 20,
    paddingLeft: 10,
    color: 'white',  // Input text color
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    borderColor: 'white',
    color: 'white',  // Picker selected text color (Android)
  },
  pickerItem: {
    color: 'white',  // Picker item text color (iOS)
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginPage;
