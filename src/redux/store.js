import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import userDataReducer from '../redux/reducers'


const rootReducer = combineReducers({ userDataReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));