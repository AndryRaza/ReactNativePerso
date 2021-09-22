import getToken from './Token'
import {API_URL} from '@env';

export async function getActivities(){
    const token = await getToken()
    .then(
        async(res) =>{
            const token_ = res;
            const response = await fetch(API_URL+ '/activities',
            {
                method:"GET",
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type' : 'application/json',
                    'Authorization': 'Bearer ' + token_
                }
            })
            if (response.ok)
            {
            
                const result = await response.json();
            }
        }
    )

};

export async function getActivitiesByUser(){
    const token = await getToken()
    .then(
        async(res) =>{
            const token_ = res;
            const response = await fetch(API_URL+ '/activities',
            {
                method:"GET",
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type' : 'application/json',
                    'Authorization': 'Bearer ' + token_
                }
            })
            if (response.ok)
            {
            
                const result = await response.json();
            }
        }
    )

};