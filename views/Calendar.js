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
import { getActivitiesByUser } from '../components/Data';
import { date } from '../components/Date';

import { Appbar, Searchbar } from 'react-native-paper';

import { addTime } from '../components/Time';

const Calendar = (props) => {


  const [activities, setActivities] = React.useState(null);
  const [date_, setDate_] = React.useState(date())

  const [boolSearch, setBoolSearch] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  let beginDay = "08:00"

  React.useEffect(() => {
    getActivitiesByUser(props.token).then((res) => {
      setActivities(res)
    },
      (err) => {
        console.log('erreur : ', err)
      })

  }, [])

  const renderActivities = () =>{
    let tab = []
    activities.map((elt, key) =>{
      let provi = beginDay
      beginDay = addTime(beginDay,elt.duree)
      tab.push (     
           <Activity name={elt.title} beginAt={provi} endAt={beginDay} apprenant={elt.user} description={elt.description} key={key}/>
       )
    })

    return tab
  }

  const logout = () => {
    const action = { type: "DECONNEXION", value: null }
    props.dispatch(action)
    props.navigation.navigate(`Connexion`)
  }

  return (
    <View>     
      {
        boolSearch ? <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{}}
        /> : <Appbar.Header style={{ backgroundColor: 'red' }}>
          <Appbar.Content title="Planning" subtitle={date_} />
          {/* <Appbar.Action icon="magnify" onPress={() => { setBoolSearch(true) }} /> */}
          <Appbar.Action icon="power" onPress={logout} />
        </Appbar.Header>
      }

      {
        activities ?
          renderActivities()
         : null
      }
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(Calendar);