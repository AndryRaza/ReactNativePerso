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
    <View>
         <Text style={styles.horaire}>{props.beginAt} - {props.endAt}</Text>
      <View style={styles.case}>
     
        <Text style={styles.title}>
          {props.name}
        </Text>
        <Text style={styles.participants} >
          Apprenant : {props.apprenant}
        </Text>
        <Text style={styles.description}>
          {props.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  case: {
    margin:10,
    borderRadius: 10,
    paddingBottom: 15,
    borderColor: 'black',
    backgroundColor : '#F0FFFF',
    overflow: 'hidden',
    //flexDirection: 'row'
  },
  title:{
   // flex : 1,
    paddingTop: 10,
    fontSize: 25,
    textAlign: 'center'
  },
  description : {
    //flex : 1
    fontSize:16,
    margin:5,
    //textAlign:'center'
  },
  horaire:{
    fontSize:22,
    paddingLeft:15
  },
  participants:{
    fontWeight:'900',
    margin:5
  }
})

export default Activity;