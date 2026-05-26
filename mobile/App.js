import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';

// TODO: Import screens
// import HomeScreen from './screens/HomeScreen';
// import DashboardScreen from './screens/DashboardScreen';
// import SubjectsScreen from './screens/SubjectsScreen';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>V2 Education</Text>
      <Text style={styles.subtitle}>CBSE Class 10 Learning Platform</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'V2 Education' }} />
        {/* TODO: Add screens for other navigation */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
