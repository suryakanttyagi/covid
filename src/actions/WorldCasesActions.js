import axios from 'axios'
import {
    global_covid_data,
    update_filter_input
} from './types'

export const fetchGlobalData = () => {
    return (dispatch)=> {
    axios.get("https://api.covid19api.com/summary")
    .then(response=>{
        console.log('response',response.status)
        if(response.status == 200)
        {            
            dispatch({
                type:global_covid_data,
                payload: response.data
                })                
        }
    })
}
}

export const onChangeInput = (value) => {
    console.log(value);
    return (dispatch) => {
        dispatch({
            type:update_filter_input,
            payload:value
        })
    }
}