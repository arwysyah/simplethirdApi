import Axios from 'axios'

export const getData = (user) =>{
    return{ 
        type : 'GET_DATA',
        payload : Axios.get(`https://api.github.com/users/${user}/repos`) 
    }
}