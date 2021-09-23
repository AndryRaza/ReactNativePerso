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

const Calendar = () =>{

    const [activities,setActivities] = React.useState(null);

    React.useEffect(() => {

      getActivitiesByUser().then((res)=>{
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
             <Activity name={elt.title} begin="10:00" key={key}/>
            ) : null
          }
        </View>
    )
}

export default Calendar;