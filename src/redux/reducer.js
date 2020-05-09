import { combineReducers } from 'redux'
import WorldCasesReducer from './WorldCasesReducer'

const appReducer = combineReducers({
    worldcasesreducer: WorldCasesReducer
})

export default appReducer;