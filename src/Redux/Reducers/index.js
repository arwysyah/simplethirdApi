import  {combineReducers} from 'redux'
import {getData} from './getData'


const appReducer = combineReducers(
    {
       getData
    }
);
export default appReducer;