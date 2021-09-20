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
          <Text>08h</Text> 
          <Activity name="test" begin="10:00" />
        </View>
    )
}

export default Calendar;