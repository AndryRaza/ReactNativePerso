import React from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';

import {API_URL} from '@env';

import { connect } from 'react-redux'

const urlLogin = API_URL + "/auth/login"
 
const date = new Date();
const date_ = date.getDay()

export default connect (async function funcLogin(email,password,navigation){

    if (email == '' || password == '')
    {
        return null;
    }

    try{
        const response = await fetch(urlLogin,{
            method:"POST",
            body:JSON.stringify({
                email : email,
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
            await AsyncStorage.setItem('token', result.access_token)
            .then(
                ()=>{
                    navigation.navigate(`Planning du ${date_}`)
                }
            )

        }
        else{
            return null;
        }
    }
    catch(err)
    {
        console.log(err)
    }
})

