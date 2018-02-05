import data from './data'
import {combineReducers} from 'redux'
import activeItemReducer from './activeItem-reducer'

const allReducer = combineReducers({
    data : data,
    activeItem : activeItemReducer
})

export default allReducer

