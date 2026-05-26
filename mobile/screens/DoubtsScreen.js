import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Picker,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DoubtsScreen() {
  const [doubts, setDoubts] = useState([]);
  const [filter, setFilter] = useState('open');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    subject: '',
  });

  // Mock data for demonstration
  useEffect(() => {
    const mockDoubts = [
      {
        id: '1',
        title: 'How to solve quadratic equations?',
        description: 'I\'m having trouble with discriminant method',
        subject: 'Mathematics',
        status: 'open',
        author: 'Student',
        answer: null,
      },
      {
        id: '2',
        title: 'Photosynthesis process',
        description: 'Can you explain the light-dependent reactions?',
        subject: 'Science',
        status: 'answered',
        author: 'Student',
        answer: 'Light reactions occur in thylakoid membrane...',
      },
    ];
    setDoubts(mockDoubts.filter((d) => d.status === filter));
  }, [filter]);

  const handleSubmit = () => {
    if (!formData.title || !formData.description || !formData.subject) {
      alert('Please fill all fields');
      return;
    }
    console.log('Submitting doubt:', formData);
    setShowForm(false);
    setFormData({ title: '', description: '', subject: '' });
  };

  const renderDoubt = ({ item }) => (
    <View style={styles.doubtCard}>
      <View style={styles.doubtHeader}>
        <Text style={styles.doubtTitle}>{item.title}</Text>
        <View style={[styles.statusBadge, styles[`status${item.status}`]]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      <Text style={styles.doubtDesc}>{item.description}</Text>
      <View style={styles.doubtMeta}>
        <Text style={styles.metaText}>📚 {item.subject}</Text>
        <Text style={styles.metaText}>👤 {item.author}</Text>
      </View>
      {item.answer && (
        <View style={styles.answerBox}>
          <Text style={styles.answerLabel}>Answer:</Text>
          <Text style={styles.answerText}>{item.answer}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Doubt Forum</Text>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => setShowForm(true)}
        >
          <Text style={styles.addBtnText}>+ Ask</Text>
        </TouchableOpacity>
      </View>

      {/* Filters */}
      <View style={styles.filters}>
        {['open', 'answered', 'closed'].map((status) => (
          <TouchableOpacity
            key={status}
            style={[styles.filterBtn, filter === status && styles.filterBtnActive]}
            onPress={() => setFilter(status)}
          >
            <Text
              style={[
                styles.filterText,
                filter === status && styles.filterTextActive,
              ]}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal Form */}
      <Modal visible={showForm} animationType="slide">
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => setShowForm(false)}>
            <Text style={styles.closeBtn}>✕ Close</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Ask a Doubt</Text>

          <TextInput
            style={styles.input}
            placeholder="Doubt Title"
            value={formData.title}
            onChangeText={(text) => setFormData({ ...formData, title: text })}
          />
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Describe your doubt"
            multiline
            numberOfLines={4}
            value={formData.description}
            onChangeText={(text) => setFormData({ ...formData, description: text })}
          />
          <Picker
            selectedValue={formData.subject}
            style={styles.picker}
            onValueChange={(itemValue) =>
              setFormData({ ...formData, subject: itemValue })
            }
          >
            <Picker.Item label="Select Subject" value="" />
            <Picker.Item label="Mathematics" value="Mathematics" />
            <Picker.Item label="Science" value="Science" />
            <Picker.Item label="SST" value="SST" />
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Hindi" value="Hindi" />
          </Picker>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={handleSubmit}
          >
            <Text style={styles.submitBtnText}>Post Doubt</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Doubts List */}
      <FlatList
        data={doubts}
        renderItem={renderDoubt}
        keyExtractor={(item) => item.id}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  addBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addBtnText: {
    color: '#667eea',
    fontWeight: 'bold',
  },
  filters: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-around',
  },
  filterBtn: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  filterBtnActive: {
    backgroundColor: '#667eea',
    borderColor: '#667eea',
  },
  filterText: {
    color: '#666',
    fontSize: 14,
  },
  filterTextActive: {
    color: '#fff',
  },
  listContent: {
    padding: 10,
  },
  doubtCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  doubtHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  doubtTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusopen: {
    backgroundColor: '#fff3cd',
  },
  statusanswered: {
    backgroundColor: '#d4edda',
  },
  statusclosed: {
    backgroundColor: '#f8d7da',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  doubtDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  doubtMeta: {
    flexDirection: 'row',
    gap: 15,
    fontSize: 12,
    color: '#888',
  },
  metaText: {
    fontSize: 12,
    color: '#888',
  },
  answerBox: {
    marginTop: 12,
    padding: 10,
    backgroundColor: '#f0f4ff',
    borderLeftWidth: 3,
    borderLeftColor: '#667eea',
    borderRadius: 5,
  },
  answerLabel: {
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: 5,
  },
  answerText: {
    fontSize: 13,
    color: '#555',
  },
  modal: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 40,
  },
  closeBtn: {
    fontSize: 16,
    color: '#667eea',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textarea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  picker: {
    backgroundColor: '#fff',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  submitBtn: {
    backgroundColor: '#667eea',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DoubtsScreen;
