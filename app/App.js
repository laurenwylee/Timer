import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, Button, Alert } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Unit Up</Text>
      <StatusBar style="auto" />
      <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
      <TextIn></TextIn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TextIn = () => {
  const [text, setText] = useState('');
  return  (
    <TextInput
      placeholder="Set Alarm"
      onChangeText={newText => setText(newText)}
      defaultValue={text}
    />
  )
}
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);