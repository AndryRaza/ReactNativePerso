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


const Login = () =>{
    
    const [login,setLogin] = React.useState('')
    const [password,setPassword] = React.useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Dayliz
            </Text>
            <TextInput 
             style={styles.login}
             placeholder="Nom d'utilisateur"
             onChangeText={setLogin}
            />
            <TextInput 
             style={styles.password}
             secureTextEntry={true}
             onChangeText={setPassword}
            />
            <Button
                title="Se connecter"
                color="blue"
                onPress={() => Alert.alert('Button with adjusted color pressed')}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding:10
    },
    login :{
        borderWidth : 1,
        borderColor: 'black',
        padding:10
    },
    password :{
        marginTop: 10,
        borderWidth : 1,
        borderColor: 'black',
        padding:10,
        marginBottom: 10
    },
    title:{
        textAlign : 'center',
        fontSize: 30
    }
});

export default Login;