// import React from 'react'

// import AsyncStorage from '@react-native-async-storage/async-storage';

// import {API_URL} from '@env';

// const urlLogin = API_URL + "/auth/login"
 
// const date = new Date();
// const date_ = date.getDay()

// const [login,setLogin] = React.useState('');
// const [password,setPassword] = React.useState('');

// const [connexion,setConnexion] = React.useState(false);
// const [error,setError] = React.useState(false);

// const funcError = () =>{
//     setError(true);
//     setTimeout(()=>{
//         setError(false)
//     },2000);
// }

// const funcLogin = async (props) =>{

//     if (login == '' && password == '')
//     {
//         funcError
//     }

//     try{
//         setConnexion(true);
//         const response = await fetch(urlLogin,{
//             method:"POST",
//             body:JSON.stringify({
//                 email : login,
//                 password : password
//             }),
//             headers:{
//                 'Accept': 'application/json', 
//                 'Content-Type' : 'application/json',
//             }
//         })
//         if(response.ok)
//         {
//             const result = await response.json();
//             await AsyncStorage.setItem('token', JSON.stringify(result.access_token))
//             .then(
//                 ()=>{
//                     navigation.navigate(`Planning du ${date_}`)
//                     setConnexion(false);
//                 }
//             )

//         }
//         else{
//             funcError
//         }
//     }
//     catch(err)
//     {
//         console.log(err)
//     }
// }