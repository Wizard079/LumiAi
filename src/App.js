import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Home Screen Component
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.welcomeText}>Welcome to AI for the Completely Blind App!</Text>
        <Button
          title="Go to Features"
          onPress={() => navigation.navigate('Features')}
        />
      </View>
    </SafeAreaView>
  );
}

// Features Screen Component
function FeaturesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.featureText}>Here are the features of the app:</Text>
        {/* List features or add more content here */}
      </View>
    </SafeAreaView>
  );
}

// Stack Navigator Setup
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Features" component={FeaturesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  innerContainer: {
    width: '80%',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  featureText: {
    fontSize: 18,
  },
});