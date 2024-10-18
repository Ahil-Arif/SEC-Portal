import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';

export default function RequestScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Dashboard Overview</Text>
        </View>

        {/* Card List */}
        <View style={styles.cardList}>
          {/* Solved Complaints */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Solved Complaints</Text>
            <Text style={styles.cardValue}>120</Text>
          </View>

          {/* Pending Complaints */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Pending Complaints</Text>
            <Text style={styles.cardValue}>35</Text>
          </View>

          {/* New Complaints */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>New Complaints</Text>
            <Text style={styles.cardValue}>10</Text>
          </View>

          {/* Complaints by Department */}
          <View style={styles.meterContainer}>
            <Text style={styles.meterTitle}>Complaints by Department</Text>

            {/* Corporate Solutions */}
            <Text style={styles.meterText}>Corporate Solutions: 50%</Text>
            <Progress.Bar progress={0.5} width={null} color="#4CAF50" />

            {/* Health & Life Solutions */}
            <Text style={styles.meterText}>Health & Life Solutions: 30%</Text>
            <Progress.Bar progress={0.3} width={null} color="#FF9800" />

            {/* HR & Admin */}
            <Text style={styles.meterText}>HR & Admin: 20%</Text>
            <Progress.Bar progress={0.2} width={null} color="#2196F3" />

            {/* Finance */}
            <Text style={styles.meterText}>Finance: 60%</Text>
            <Progress.Bar progress={0.6} width={null} color="#9C27B0" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F184C',
  },
  header: {
    backgroundColor: '#1F184C',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardList: {
    borderColor:'white',
    marginTop: 20, // Adds space below the header
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50', // Green color for the value
  },
  meterContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  meterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  meterText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
