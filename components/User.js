import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserInfos = async () => {
    try {
      const result = await AsyncStorage.getItem('user')
      return result
    } catch(e) {
      console.log(e)
    }
  }

export default getUserInfos;