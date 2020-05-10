
import {
    india_covid_data,
    update_state_filter_input
} from '../actions/types';

const covidGlobalData = {indiaData: '', stateData: '', filteredData: '', filterInput: ''}

const IndiaCasesReducer = (state=covidGlobalData, action) => {
switch(action.type){
    case india_covid_data:
        let modifyData = action.payload.cases_time_series[action.payload.cases_time_series.length - 1]
        Object.keys(modifyData).forEach(item=>{
            if(item != 'date')
            modifyData[item] = modifyData[item] ? parseInt(modifyData[item]): modifyData[item];
        })
        state={
            ...state,
            indiaData: action.payload.cases_time_series[action.payload.cases_time_series.length - 1],
            stateData: action.payload.statewise,
            filteredData: action.payload.statewise
        }
        console.log(state)
    break;
    case update_state_filter_input:
        state={
        ...state,
        filterInput: action.payload,
        filteredData: state.stateData.filter((item)=>{
            if(item['state'].toLowerCase().indexOf(action.payload.toLowerCase()) != -1)
            {
                return true;
            }
            else
            {
                return false;
            }
        })
    }
    break;
    default:        
}
return state

}

export default IndiaCasesReducer