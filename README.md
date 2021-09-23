<!-- Title -->
<p align="center">
<img src="/assets/icon.jpg" alt="alt text" width="300" style="padding-top: 16px; padding-bottom: 16px;" />
</p>

<!-- Header -->

<p align="center">
  <b>Write emoji by emoji code</b>
  <br />
</p>

<p align="center">
  <img width="350" src="/assets/demo.gif">
</p>

## Installation

```sh
npm install react-native-emoji-hook
```

## Usage

```js
import useEmoji, { emojify } from 'react-native-emoji-hook';

// ...

const [text, setText] = useEmoji();
```

**emojify** function is not hook it is basically text to emoji text converter. you can use this for making own custom useState.

## Example Code

```
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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
