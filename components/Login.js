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

import AsyncStorage from '@react-native-async-storage/async-storage';

import {API_URL} from '@env';

const Login = ({navigation}) =>{

    const date = new Date();
    const date_ = date.getDay()
    
    const [login,setLogin] = React.useState('');
    const [password,setPassword] = React.useState('');

    const [connexion,setConnexion] = React.useState(false);
    const [error,setError] = React.useState(false);

    const funcError = () =>{
        setError(true);
        setTimeout(()=>{
            setError(false)
        },2000);
    }

    const funcLogin = async () =>{

        if (login == '' && password == '')
        {
            funcError
        }

        try{
            setConnexion(true);
            const response = await fetch('http://10.0.2.2:8000/api/auth/login',{
                method:"POST",
                body:JSON.stringify({
                    email : login,
                    password : password
                }),
                headers:{
                    'Accept': 'application/json', 
                    'Content-Type' : 'application/json',
                }
            })
            if(response.ok)
            {
                const result = await response.json();
                await AsyncStorage.setItem('token', JSON.stringify(result.access_token))
                .then(
                    ()=>{
                        navigation.navigate(`Planning du ${date_}`)
                        setConnexion(false);
                    }
                )

            }
            else{
                funcError
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }

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
            {
                error ? <Text style={styles.error}>
                Une erreur s'est produite. Veuillez recommencer...
            </Text> : null
            }

            {connexion ? <Text style={styles.connexion}>Connexion en cours...</Text> :   <Button
                title="Se connecter"
                color="blue"
                onPress={funcLogin}
             />}
          
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
    },
    connexion:{
        textAlign:'right',
        fontSize: 16
    },
    error:{
        color: 'red',
        fontSize: 16,
        margin: 5
    }
});

export default Login;