import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

function SubjectsScreen({ navigation }) {
  const subjects = [
    { id: '1', name: 'Mathematics', icon: '🔢' },
    { id: '2', name: 'Science', icon: '🔬' },
    { id: '3', name: 'SST', icon: '🌍' },
    { id: '4', name: 'English', icon: '📖' },
    { id: '5', name: 'Hindi', icon: '🏠' },
  ];

  const renderSubject = ({ item }) => (
    <TouchableOpacity style={styles.subjectCard}>
      <Text style={styles.icon}>{item.icon}</Text>
      <Text style={styles.subjectName}>{item.name}</Text>
      <Text style={styles.subjectDesc}>Explore chapters & resources</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Subjects</Text>
        <Text style={styles.subtitle}>Choose a subject to explore</Text>
      </View>

      <FlatList
        data={subjects}
        renderItem={renderSubject}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        scrollEnabled={true}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#667eea',
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  listContent: {
    padding: 10,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  subjectCard: {
    width: '48%',
    backgroundColor: '#fff',
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#667eea',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  subjectDesc: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default SubjectsScreen;
