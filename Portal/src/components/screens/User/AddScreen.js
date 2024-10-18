import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'; // Import Icon from react-native-elements
import { Picker } from '@react-native-picker/picker';

const AddScreen = ({ sector }) => {
  const [expanded, setExpanded] = useState(false); // State to control form visibility
  const [department, setDepartment] = useState(sector); // Set department based on login
  const [complaintTitle, setComplaintTitle] = useState('');
  const [description, setDescription] = useState('');
  const [serialNumber, setSerialNumber] = useState('');

  // Function to generate a department-specific serial number
  useEffect(() => {
    const generateSerialNumber = () => {
      const timestamp = Date.now();

      // Map department to its corresponding serial code prefix
      let departmentPrefix = '';
      switch (department) {
        case 'Corporate Solutions':
          departmentPrefix = 'CORP';
          break;
        case 'Health & Life Solutions':
          departmentPrefix = 'HLS';
          break;
        case 'HR & Admin':
          departmentPrefix = 'HR';
          break;
        case 'Finance':
          departmentPrefix = 'FIN';
          break;
        default:
          departmentPrefix = '';
      }

      // Only generate serial number for non-IT departments
      if (departmentPrefix) {
        const uniqueSerial = `${departmentPrefix}-${timestamp}`;
        setSerialNumber(uniqueSerial);
      } else {
        setSerialNumber(''); // IT doesn't require a serial number
      }
    };
    generateSerialNumber();
  }, [department]);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = () => {
    if (!complaintTitle || !description) {
      alert('Please fill all fields');
      return;
    }
    alert(`Complaint submitted successfully! Serial Number: ${serialNumber}`);
    
    // Clear the form after submission
    setComplaintTitle('');
    setDescription('');
    setExpanded(false); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handlePress} activeOpacity={0.7}>
        {/* Using react-native-elements Icon with FontAwesome */}
        <Icon name="rocket" type="font-awesome" size={100} color="white" />
        <Text style={styles.uploadText}>Launch Your Complaint</Text>
        {serialNumber && <Text style={styles.serialText}>Serial Number: {serialNumber}</Text>}
      </TouchableOpacity>

      {expanded && (
        <View style={styles.formContainer}>
          <Picker
            selectedValue={department}
            style={styles.picker}
            enabled={false} // Disable the dropdown as we are auto-selecting based on the login
            dropdownIconColor="white"
          >
            <Picker.Item label={department} value={department} />
          </Picker>

          <TextInput
            style={styles.input}
            placeholder="Complaint Title"
            placeholderTextColor="#ccc"
            value={complaintTitle}
            onChangeText={setComplaintTitle}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Describe your complaint"
            placeholderTextColor="#ccc"
            value={description}
            onChangeText={setDescription}
            multiline={true}
            numberOfLines={4}
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit Complaint</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F184C',
    padding: 20,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  serialText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFC600',
    marginTop: 10,
  },
  formContainer: {
    width: '100%',
    padding: 20,
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: '#FFC600',
    borderWidth: 3,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
    color: 'white',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    color: 'white',
    borderColor: '#FFC600',
  },
  submitButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default AddScreen;
