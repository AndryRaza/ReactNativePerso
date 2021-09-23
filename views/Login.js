import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

import { API_URL } from '@env';

import { connect } from 'react-redux'

//import { funcLogin } from '../components/Login';

const Login = (props) => {


    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [connexion, setConnexion] = React.useState(false);
    const [error, setError] = React.useState(false);

    const urlLogin = API_URL + "/auth/login"
    const date = new Date();
    const date_ = date.getDay()

    const funcLogin = async (email, password) => {

        if (email == '' || password == '') {
            return null;
        }

        try {
            const response = await fetch(urlLogin, {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            if (response.ok) {
               await response.json()
                    .then(
                        (result)=>{
                            const action = {type: "CONNEXION", value:result.access_token}  
                            props.dispatch(action)
                            props.navigation.navigate(`Planning`) 
                        }
                    ) 
            }
            else {
                return null;
            }
        }
        catch (err) {
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

            {connexion ? <Text style={styles.connexion}>Connexion en cours...</Text> : <Button
                title="Se connecter"
                color="blue"
                onPress={() => funcLogin(login, password)}
            />}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10
    },
    login: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10
    },
    password: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    connexion: {
        textAlign: 'right',
        fontSize: 16
    },
    error: {
        color: 'red',
        fontSize: 16,
        margin: 5
    }
});

const mapStateToProps = (state) => {
    return state
  }

  

export default connect(mapStateToProps)(Login);