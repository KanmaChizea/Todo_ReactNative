import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

export type LoginScreenNavigationProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};
export type HomeScreenNavigationProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};
