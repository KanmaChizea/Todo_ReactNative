import React from 'react';
import Colors from '../../styles/colors';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';

function LoginButton({onPress}: {onPress: () => void}): JSX.Element {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width - 32,
    backgroundColor: Colors.green,
    borderRadius: 12,
    padding: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.background,
    textAlign: 'center',
  },
});

export default LoginButton;
