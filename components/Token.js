import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token')
      return jsonValue
  
    } catch(e) {
      console.log(e)
    }
  }

export default getToken;