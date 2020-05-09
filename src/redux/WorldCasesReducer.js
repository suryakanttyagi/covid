
import {
    global_covid_data,
    update_filter_input
} from '../actions/types';

const covidGlobalData = {globalData: '', countriesData: '', filteredData: '', filterInput: ''}

const WorldCasesReducer = (state=covidGlobalData, action) => {
switch(action.type){
    case global_covid_data:
        state={
            ...state,
            globalData: action.payload.Global,
            countriesData: action.payload.Countries,
            filteredData: action.payload.Countries
        }
    break;
    case update_filter_input:
        state={
        ...state,
        filterInput: action.payload,
        filteredData: state.countriesData.filter((item)=>{
            if(item['Country'].toLowerCase().indexOf(action.payload.toLowerCase()) != -1)
            {
                return true;
            }
            else
            {
                return false;
            }
        })
    }
    console.log(state.filteredData)
    break;
    default:        
}
return state

}

export default WorldCasesReducer