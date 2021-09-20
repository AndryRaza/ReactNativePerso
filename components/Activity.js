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


const Activity = (props) => {
  return (
    <View style={styles.case}>
      <Text>
        {props.name} - {props.begin}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  case: {
    margin:10,
    borderRadius: 10,
    padding: 10,
    borderColor: 'red',
    backgroundColor : 'blue',
    overflow: 'hidden'
  }
})

export default Activity;