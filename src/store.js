import {createStore} from 'redux';
import rootReducer from './reducers';
import { fromJS } from 'immutable';

export default (initialState = {}) => createStore(rootReducer, fromJS(initialState));