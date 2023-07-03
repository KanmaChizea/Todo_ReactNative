import React from 'react';
import LoginScreen from './app/screens/login_screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/home_screen';
import { RootStackParamList } from './app/components/navigation/navigation_values';
import { AppBar } from './app/components/home/appbar';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
return <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Home'
         component={HomeScreen} 
         />
    </Stack.Navigator>
</NavigationContainer>
};

export default App;
