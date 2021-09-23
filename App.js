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

import Login from './views/Login';
import Calendar from './views/Calendar';

import { Provider } from 'react-redux'
import Store from './store/configureStore'

const Stack = createNativeStackNavigator();



const App = () => {

  const date = new Date();
  const date_ = date.getDay()

  return (
    <Provider store={Store}>
      <NavigationContainer>
        { /*<Stack.Navigator initialRouteName={`Planning du ${date_}`}>*/}
        <Stack.Navigator initialRouteName="Connexion">
          <Stack.Screen
            name="Connexion"
            component={Login}
            options={
              {
                headerShown: false
              }
            }
          />

          <Stack.Screen
            name={`Planning`}
            component={Calendar}
            options={
              {
                headerBackVisible : false
              }
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>


  );
};

const styles = StyleSheet.create({

});

export default App;
