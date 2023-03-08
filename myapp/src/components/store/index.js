import {applyMiddleware, combineReducers, createStore} from 'redux'
import { countReducer } from './countReducer'
import { emplReducer } from './emplReducer'
import { openForm } from './OpenReg'
import { closeForm } from './CloseReg'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    count: countReducer,
    empl: emplReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))