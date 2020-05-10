import axios from 'axios'
import {
    india_covid_data,
    update_state_filter_input
} from './types'

export const fetchIndiaData = () => {
    return (dispatch)=> {
    axios.get("https://api.covid19india.org/data.json")
    .then(response=>{
        console.log('response',response.status)
        if(response.status == 200)
        {            
            dispatch({
                    type:india_covid_data,
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
            type:update_state_filter_input,
            payload:value
        })
    }
}