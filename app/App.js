import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, Button, Alert } from 'react-native';
import React, {useState} from 'react';
import { auth, provider } from './src/firebase';

export default function App() {
  
  return (
    
    <View style={styles.container}>
      <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={signIn}>Sign In with Google</button>
      )}
    </div>
      <Text>Unit Up</Text>
      <StatusBar style="auto" />
      <Button title={'button'} onPress={createTwoButtonAlert} />
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

    const [user, setUser] = useState(null);

    const signIn = async () => {
      try {
        const result = await auth.signInWithPopup(provider);
        setUser(result.user);
      } catch (error) {
        console.error(error);
      }
    };
  
    const signOut = () => {
      auth.signOut();
      setUser(null);
    };
  