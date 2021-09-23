import getToken from './Token'
import {API_URL} from '@env';

export async function getActivities(){
    const token_ = await getToken()
    const response = await fetch(API_URL+ '/activities',
    {
        method:"GET",
        headers: {
            'Accept': 'application/json', 
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer ' + token_
        }
    })
    const result = await response.json();
    return result;
};

export async function getActivitiesByUser(token_){
    const id = '1'
    //const token_ = await getToken()
    const response = await fetch(`${API_URL}/users/${id}/activities`,
            {
                method:"GET",
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type' : 'application/json',
                    'Authorization': 'Bearer ' + token_
                }
            })
    const result = await response.json();
    return result.data;
    
    
};