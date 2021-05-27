import counterNumber from './counter'
import calcNumber from './multdiv'
import todoReducer from './todoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    counterNumber,
    calcNumber,
    todoReducer
})

export default rootReducer;