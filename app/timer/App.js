import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, Vibration } from 'react-native';


export default function App() {
  const [timeInput, setTimeInput] = useState('');
  const [timerId, setTimerId] = useState(null);

  const handleInputChange = (text) => {
    setTimeInput(text);
  };

  const handleSubmit = () => {
    // Clear existing timer
    if (timerId) {
      clearTimeout(timerId);
    }

    // Validate input
    const timeInSeconds = parseInt(timeInput, 10);
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
      Alert.alert('Please enter a valid positive number for the timer.');
      return;
    }

    // Set up a new timer
    const newTimerId = setTimeout(() => {
      Alert.alert('Time is up!');
      Vibration.vibrate(); // Trigger a vibration effect
    }, timeInSeconds * 1000);

    setTimerId(newTimerId);
  };

  // Cleanup the timer on component unmount
  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Set up a timer for notification</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        placeholder="  Set Timer (seconds)  "
        keyboardType="numeric"
        value={timeInput}
        onChangeText={handleInputChange}
      />
      <Button title="Start Timer" onPress={handleSubmit} />
    </View>
  );
}
