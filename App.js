import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';

const Stack = createNativeStackNavigator();



const App = () => {

  

  return (
    <NavigationContainer>

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Connexion"
            component={Login}
          />
        </Stack.Navigator>
    </NavigationContainer>
    

  );
};

const styles = StyleSheet.create({

});

export default App;
