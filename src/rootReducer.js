import {combineReducers} from 'redux'
import AppReducer from './containers/App/reducer'
import LoginReducer from './containers/Login/reducer'
import HomeReducer from './containers/Main/HomePage/reducer'
export default combineReducers({AppReducer, LoginReducer, HomeReducer})
