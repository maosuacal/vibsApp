import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {blue} from 'react-native-reanimated/lib/typescript/Colors';

interface Props {
  name?: string;
}

export const HomeScreen = ({name = 'World'}: Props) => {
  return (
    <View style={styles.container}>
      <Text>GLUM ahora es Vibs</Text>
      <Text>Hello, {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
