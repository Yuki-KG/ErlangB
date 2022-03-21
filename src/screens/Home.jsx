import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Text, TextInput, View, StyleSheet,
} from 'react-native';

// Components
import Button from '../components/Button';
// Screens
import Result from './Result';

export default function Home(props) {
  const { navigation } = props;
  const [traffic, setTraffic] = useState('');
  const [servers, setServers] = useState('');
  let textInput1;
  let textInput2;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ErlangB</Text>
      <Text style={styles.lead}>Open up App.js to start working on your app!</Text>
      <TextInput
        ref={(input) => { textInput1 = input; }}
        style={styles.inputText}
        value={traffic}
        onChangeText={(text) => { setTraffic(text); }}
        keyboardType="decimal-pad"
        placeholder="Traffic (erlang)"
      />
      <TextInput
        ref={(input) => { textInput2 = input; }}
        style={styles.inputText}
        value={servers}
        onChangeText={(text) => { setServers(text); }}
        keyboardType="number-pad"
        placeholder="Servers"
      />
      <Button
        label="Erlang!"
        onPress={() => {
          navigation.navigate('Result', {
            s: servers,
            a: traffic,
          });
        }}
      />
      <Button
        label="Clear"
        onPress={() => {
          textInput1.clear();
          textInput2.clear();
        }}
      />
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  lead: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'normal',
    marginTop: 8,
    marginBottom: 8,
  },
  inputText: {
    fontSize: 16,
    height: 32,
    backgroundColor: '#FFFFFF',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    width: '40%',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
});
