import { combineReducers } from 'redux'
import WorldCasesReducer from './WorldCasesReducer'
import IndiaCasesReducer from './IndiaCasesReducer';

const appReducer = combineReducers({
    worldcasesreducer: WorldCasesReducer,
    indiacasesreducer: IndiaCasesReducer
})

export default appReducer;