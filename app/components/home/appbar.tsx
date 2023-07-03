import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TextStyles from '../../styles/textstyles';
import Colors from '../../styles/colors';
import {HomeScreenNavigationProp} from '../navigation/navigation_values';

export function AppBar({navigation}: HomeScreenNavigationProp) {
  return (
    <View style={styles.appbar}>
      <View style={styles.title}>
        <Image
          source={require('../../../assets/todo_logo.png')}
          style={styles.logo}></Image>
        <Text style={{...TextStyles.h2, paddingLeft: 8}}>TodoApp</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{...TextStyles.bodySmall, color: Colors.red}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logout: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.red,
  },
  logo: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    paddingEnd: 8,
  },

  title: {
    flexDirection: 'row',
  },
  appbar: {
    flexDirection: 'row',
    paddingTop: 48,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
});
