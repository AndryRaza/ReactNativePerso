import getToken from './Token'
import {API_URL} from '@env';

const getActivities = async () => {
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
                console.log(token_)
                const result = await response.json();
                console.log('activties',result)
            }
        }
    )

};

export default getActivities