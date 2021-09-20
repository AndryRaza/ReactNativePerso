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

import Activity from './Activity';

const Calendar = () =>{
    return (
        <View>
          <Activity name="Test 1" begin="10:00" />
          <Activity name="Test 2" begin="12:00" />
        </View>
    )
}

export default Calendar;