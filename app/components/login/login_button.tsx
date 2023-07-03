import React from 'react';
import Colors from '../../styles/colors';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {LoginScreenNavigationProp} from '../navigation/navigation_values';

function LoginButton({navigation}: LoginScreenNavigationProp): JSX.Element {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Home')}>
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
