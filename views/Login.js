import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

import { funcLogin } from '../components/Login';

const Login = ({ navigation }) => {


    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [connexion, setConnexion] = React.useState(false);
    const [error, setError] = React.useState(false);

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
                onPress={() => funcLogin(login, password, navigation)}
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

export default Login;