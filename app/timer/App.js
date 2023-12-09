import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, Vibration, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Card, Input } from 'react-native-elements';

export default function App() {
  const [timerInput, setTimerInput] = useState('');
  const [stopwatchSeconds, setStopwatchSeconds] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [stopwatchId, setStopwatchId] = useState(null);

  const handleTimerInputChange = (text) => {
    setTimerInput(text);
  };

  const startTimer = () => {
    Keyboard.dismiss(); // Dismiss the keyboard
    const timeInSeconds = parseInt(timerInput, 10);
  
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
      Alert.alert('Please enter a valid positive number for the timer.');
      return;
    }
  
    setTimerSeconds(timeInSeconds);
    setTimerInput(''); // Reset the input to clear it
  
    const newTimerId = setInterval(() => {
      setTimerSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(newTimerId);
          Alert.alert('Time is up!');
          Vibration.vibrate();
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
  
    setTimerId(newTimerId);
  };

  const stopTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
      setTimerSeconds(0);
    }
  };

  const startStopwatch = () => {
    Keyboard.dismiss(); // Dismiss the keyboard
    const newStopwatchId = setInterval(() => {
      setStopwatchSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    setStopwatchId(newStopwatchId);
  };

  const stopStopwatch = () => {
    console.log('Stopping Stopwatch');
    if (stopwatchId) {
      clearInterval(stopwatchId);
      setStopwatchId(null);
      console.log('Stopwatch Stopped');
    }
  };
  

  const resetStopwatch = () => {
    setStopwatchSeconds(0);
  };

  useEffect(() => {
    return () => {
      stopTimer();
      stopStopwatch();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#F1D9A7' }}>
        <Card containerStyle={{ width: '100%', backgroundColor: '#A3BBAD', borderRadius: 10 }}>
          <Card.Title style={{ color: '#312509' }}>Timer and Stopwatch App</Card.Title>
          <Card.Divider />

          {/* Timer Section */}
          <Input
            placeholder="Set Timer (seconds)"
            keyboardType="numeric"
            value={timerInput}
            onChangeText={handleTimerInputChange}
            inputStyle={{ color: '#312509' }}
          />
          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ borderWidth: 1, borderColor: '#312509', borderRadius: 5 }}>
              <Button title="Start Timer" onPress={startTimer} color="#312509" />
            </View>
            <View style={{ borderWidth: 1, borderColor: '#312509', borderRadius: 5 }}>
              <Button title="Stop Timer" onPress={stopTimer} color="#312509" />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 24, textAlign: 'center', color: '#312509' }}>
              {timerSeconds > 0 ? `Time remaining: ${timerSeconds} seconds` : 'Input Time in Seconds'}
            </Text>
          </View>

          {/* Stopwatch Section */}
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontSize: 24, textAlign: 'center', color: '#312509' }}>Stopwatch: {stopwatchSeconds} seconds</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <View style={{ borderWidth: 1, borderColor: '#312509', borderRadius: 5 }}>
              <Button title="Start" onPress={startStopwatch} color="#312509" />
            </View>
            <View style={{ borderWidth: 1, borderColor: '#312509', borderRadius: 5 }}>
              <Button title="Stop" onPress={stopStopwatch} color="#312509" />
            </View>
            <View style={{ borderWidth: 1, borderColor: '#312509', borderRadius: 5 }}>
              <Button title="Reset " onPress={resetStopwatch} color="#312509" />
            </View>
          </View>
        </Card>
      </View>
      </TouchableWithoutFeedback>
  );
}

           
