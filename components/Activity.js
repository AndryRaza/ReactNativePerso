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
      <Text style={styles.date}>
        {props.name} - {props.begin}
      </Text>
      <Text style={styles.description}>
        Description : {"\n"}
        {props.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  case: {
    margin:10,
    borderRadius: 10,
    padding: 10,
    borderColor: 'black',
    backgroundColor : '#F0FFFF',
    overflow: 'hidden',
    flexDirection: 'row'
  },
  date:{
    flex : 1,
    paddingTop: 10
  },
  description : {
    flex : 1
  }
})

export default Activity;