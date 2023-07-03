import React, {useState} from 'react';
import Colors from '../styles/colors';
import LoginButton from '../components/login/login_button';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from '../components/login/header';
import InputForm from '../components/login/login_form';
import {LoginScreenNavigationProp} from '../components/navigation/navigation_values';

function LoginScreen({navigation}: LoginScreenNavigationProp) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.foreground : Colors.background,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <Header />
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.formSpacing}>
          <InputForm
            value={name}
            onChangeText={val => setName(val)}
            placeholder="Name"
            errorMessage={errorName}
          />
          <InputForm
            value={email}
            onChangeText={val => setEmail(val)}
            placeholder="Email"
            errorMessage={errorEmail}
          />
          <InputForm
            value={password}
            onChangeText={val => setPassword(val)}
            placeholder="Password"
            secureTextEntry={true}
            errorMessage={errorPassword}
          />
        </View>
        <LoginButton
          onPress={() => {
            if (
              email.length === 0 ||
              name.length === 0 ||
              password.length < 8 ||
              password.length === 0
            ) {
              if (email.length === 0) {
                setErrorEmail('Required field');
              } else {
                setErrorEmail('');
              }

              if (name.length === 0) {
                setErrorName('Required field');
              } else {
                setErrorName('');
              }
              if (password.length === 0) {
                setErrorPassword('Required field');
              } else if (password.length < 8) {
                setErrorPassword(
                  'Password should have a minimum of 8 characters',
                );
              } else {
                setErrorPassword('');
              }
            } else {
              setErrorEmail('');
              setErrorName('');
              setErrorPassword('');
              navigation.navigate('Home');
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 40,
  },
  loginText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  formSpacing: {
    marginTop: 48,
    marginBottom: 64,
  },
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

export default LoginScreen;
