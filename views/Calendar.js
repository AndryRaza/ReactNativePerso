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

const Calendar = (props) => {

  const [activities, setActivities] = React.useState(null);
  const [date_, setDate_] = React.useState(date())

  const [boolSearch, setBoolSearch] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);


  React.useEffect(() => {
    getActivitiesByUser(props.token).then((res) => {
      setActivities(res)
    },
      (err) => {
        console.log('erreur : ', err)
      })

  }, [])

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
          <Appbar.Action icon="magnify" onPress={() => { setBoolSearch(true) }} />
          <Appbar.Action icon="dots-horizontal" onPress={() => { }} />
        </Appbar.Header>
      }

      {
        activities ?
          activities.map((elt, key) =>
            <Activity name={elt.title} begin="10:00" description={elt.description} key={key} />
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

export default connect(mapStateToProps)(Calendar);