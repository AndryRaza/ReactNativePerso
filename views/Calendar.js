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
import { connect } from 'react-redux';

import Activity from '../components/Activity';
import {getActivitiesByUser} from '../components/Data';
import { date } from '../components/Date';


const Calendar = (props) =>{

    const [activities,setActivities] = React.useState(null);
    const [date_,setDate_] = React.useState(date())

    React.useEffect(() => {
      getActivitiesByUser(props.token).then((res)=>{
        setActivities(res)
    },
    (err)=>{
      console.log('erreur : ', err)
    })

    }, [])

    return (
        <View>
          {
            activities ?
            activities.map((elt,key)=>
             <Activity name={elt.title} begin="10:00" description={elt.description} key={key}/>
            ) : null
          }
        </View>
    )
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps) (Calendar);