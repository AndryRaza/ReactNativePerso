import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button
} from 'react-native';

import Activity from '../components/Activity';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getActivities} from '../components/Data';

const Calendar = () =>{

    getActivities()

    return (
        <View>
          <Activity name="Test 1" begin="10:00" />
          <Activity name="Test 2" begin="12:00" />
        </View>
    )
}

export default Calendar;