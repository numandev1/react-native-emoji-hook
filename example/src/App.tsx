import * as React from 'react';

import { StyleSheet, View, TextInput } from 'react-native';
import useEmoji from 'react-native-emoji-hook';

export default function App() {
  const [text, setText] = useEmoji();
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 100,
    backgroundColor: 'gray',
    fontSize: 30,
  },
});
