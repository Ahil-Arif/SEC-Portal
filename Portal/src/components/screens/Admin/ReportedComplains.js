import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
//import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {
  // Import images (replace image paths with your own)
  // const eventImages = {
  //   zabFest: require('../../../assets/icon.png'),
  //   techSummit: require('../../../assets/icon.png'),
  //   hackathon: require('../../../assets/icon.png'),
  // };

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.calendarContainer}>
        <Calendar
          // Add your calendar customization props here
          // For example:
          // onDayPress={(day) => { console.log('selected day', day); }}
        />
      </View> */}

      <View style={styles.eventsContainer}>
        <Text style={styles.heading}>All Reports</Text>
        <View style={styles.eventItem}>
          {/* <Image source={eventImages.zabFest} style={styles.eventImage} /> */}
          <Text style={styles.eventtext}>ZAB E-Fest</Text>
        </View>
        <View style={styles.eventItem}>
          {/* <Image source={eventImages.techSummit} style={styles.eventImage} /> */}
          <Text style={styles.eventtext}>ZAB Tech Summit</Text>
        </View>
        <View style={styles.eventItem}>
          {/* <Image source={eventImages.hackathon} style={styles.eventImage} /> */}
          <Text style={styles.eventtext}>ZAB Hackathon</Text>
        </View>
        {/* Add more events as needed */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F184C',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 25,
    color:'white',
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  eventtext:{
    color: 'white',
    marginLeft: 10,
  },
});

export default CalendarScreen;
