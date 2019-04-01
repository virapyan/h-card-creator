import { combineReducers } from 'redux-immutable';
import cardReducer from './cardReducer';

const rootReducer = combineReducers({
  card: cardReducer,
});

export default rootReducer;