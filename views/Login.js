import React from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';

import { API_URL } from '@env';

import { TextInput, Button, Avatar } from 'react-native-paper';

import { connect } from 'react-redux';

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
                        (result) => {
                            const action = { type: "CONNEXION", value: result.access_token }
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
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Dayliz
                </Text>
                <View style={{ justiftyContent: "center", alignItems: "center" }}>
                    <Avatar.Icon style={{ backgroundColor: 'red'}} size={110} icon="calendar-check" />
                </View>
            </View>


            <View style={styles.form}>
                <TextInput
                    mode="outlined"
                    label="Nom d'utilisateur"
                    placeholder="Amouranth"
                    theme={{ colors: { primary: 'red',underlineColor:'transparent',}}}
                    onChangeText={setLogin}
                />
                <TextInput
                    mode="outlined"
                    label="Mot de passe"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    theme={{ colors: { primary: 'red',underlineColor:'transparent',}}}
                    style={styles.password}
                />
                {
                    error ? <Text style={styles.error}>
                        Une erreur s'est produite. Veuillez recommencer...
                    </Text> : null
                }

                <Button
                    mode="contained"
                    icon="login"
                    color="red"
                    onPress={() => funcLogin(login, password)}
                >
                    Se connecter
                </Button>
            </View>
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
    titleContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1
    },
    form: {
        flex: 1
    },
    login: {
        borderWidth: 1,
        borderColor: 'black',
        //padding: 10
    },
    password: {
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 70
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