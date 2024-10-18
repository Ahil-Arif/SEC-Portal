import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, LayoutAnimation, UIManager, Platform } from 'react-native';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ComplainScreen = ({ resolvedCount, pendingCount }) => {
  const [complaints, setComplaints] = useState([]);
  const [isPendingExpanded, setIsPendingExpanded] = useState(false);
  const [isResolvedExpanded, setIsResolvedExpanded] = useState(false);

  // Mock function to fetch complaints
  useEffect(() => {
    const fetchComplaints = () => {
      const newComplaints = Array.from({ length: 20 }, (_, i) => ({
        id: `${i + 1}`,
        title: `Complaint ${i + 1}`,
        status: Math.random() > 0.5 ? 'Resolved' : 'Pending',
      }));
      setComplaints(newComplaints);
    };
    
    fetchComplaints();
  }, []);

  const pendingComplaints = complaints.filter(complaint => complaint.status === 'Pending');
  const resolvedComplaints = complaints.filter(complaint => complaint.status === 'Resolved');

  // Toggle Pending section
  const togglePendingSection = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsPendingExpanded(!isPendingExpanded);
  };

  // Toggle Resolved section
  const toggleResolvedSection = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsResolvedExpanded(!isResolvedExpanded);
  };

  const renderComplaintItem = ({ item }) => (
    <View style={styles.complaintItem}>
      <Text style={styles.complaintTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Pending Section */}
      <TouchableOpacity onPress={togglePendingSection} style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Pending Complaints ({pendingComplaints.length})</Text>
      </TouchableOpacity>
      {isPendingExpanded && (
        <FlatList
          data={pendingComplaints}
          renderItem={renderComplaintItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}

      {/* Resolved Section */}
      <TouchableOpacity onPress={toggleResolvedSection} style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Resolved Complaints ({resolvedComplaints.length})</Text>
      </TouchableOpacity>
      {isResolvedExpanded && (
        <FlatList
          data={resolvedComplaints}
          renderItem={renderComplaintItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
      
      {/* Bar Graph Component should be integrated here if needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f184c',
    flex: 1,
    padding: 20,
  },
  sectionHeader: {
    paddingVertical: 15,
    backgroundColor: '#FFC600',
    borderRadius: 10,
    marginTop:20,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f184c',
  },
  listContainer: {
    paddingBottom: 20,
  },
  complaintItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  complaintTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ComplainScreen;
