import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import TextStyles from '../../styles/textstyles';

function Header(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/todo_logo.png')}></Image>
      <View style={styles.space}></View>
      <Text style={TextStyles.h1}>Welcome to{'\n'}TodoApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    marginBottom: 68,
  },
  space: {
    padding: 8,
  },
});

export default Header;
