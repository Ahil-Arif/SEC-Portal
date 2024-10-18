import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit'; // Import BarChart

const HomeScreen = () => {
  const [complaints, setComplaints] = useState([]);

  // Mock function to fetch complaints
  useEffect(() => {
    const fetchComplaints = () => {
      const newComplaints = Array.from({ length: 30 }, (_, i) => ({
        id: `${i + 1}`,
        title: `Complaint ${i + 1}`,
        status: Math.random() > 0.5 ? 'Resolved' : 'Pending',
      }));
      setComplaints(newComplaints);
    };
    
    fetchComplaints();
  }, []);

  // Count resolved and pending complaints
  const resolvedComplaints = complaints.filter(complaint => complaint.status === 'Resolved').length;
  const pendingComplaints = complaints.filter(complaint => complaint.status === 'Pending').length;
  const totalComplaints = complaints.length; // Total number of complaints

  // Data for the bar chart (without "Ongoing")
  const chartData = {
    labels: ['Pending', 'Resolved'],
    datasets: [
      {
        data: [pendingComplaints, resolvedComplaints],
      },
    ],
  };

  return (
    <View style={styles.container}>
      {/* Complaints Summary */}
      <Text style={styles.header}>Your Complaints Dashboard</Text>

      {/* Bar Chart for Complaints Status */}
      <BarChart
        data={chartData}
        width={Dimensions.get('window').width - 40} // Full width minus padding
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundColor: '#1f184c',
          backgroundGradientFrom: '#1f184c',
          backgroundGradientTo: '#1f184c',
          decimalPlaces: 0, // For whole numbers
          color: (opacity = 1) => `rgba(255, 198, 0, ${opacity})`, // Bar color
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Label color
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 20,
          borderRadius: 16,
        }}
      />

      {/* Box showing total complaints - Moved below the chart */}
      <View style={styles.totalComplaintsBox}>
        <Text style={styles.totalComplaintsText}>Total Complaints</Text>
        <Text style={styles.totalComplaintsNumber}>{totalComplaints}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f184c',
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  totalComplaintsBox: {
    backgroundColor: '#FFC600', // Color code you provided
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Space between the chart and total box
  },
  totalComplaintsText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  totalComplaintsNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default HomeScreen;
