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
import {getActivitiesByUser} from '../components/Data';
import { date } from '../components/Date';


const Calendar = () =>{

    const [activities,setActivities] = React.useState(null);
    const [date_,setDate_] = React.useState(date())

    React.useEffect(() => {

      getActivitiesByUser().then((res)=>{
        setActivities(res)
    },
    (err)=>{
      console.log('erreur : ', err)
    })
    console.log(date_)


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

export default Calendar;