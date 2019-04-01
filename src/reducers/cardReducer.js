import { fromJS } from 'immutable';
import * as constants from '../actions/constants';
import { fromHtml } from '../utils/parser';

const initialTestState = fromHtml();

const initialState = fromJS(initialTestState);

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_AVATAR:
      return state.set('avatar', action.avatar);
    case constants.UPDATE_NAME:
      return state.set('name', action.name);
    case constants.UPDATE_SURNAME:
      return state.set('surname', action.surname);
    case constants.UPDATE_EMAIL:
      return state.set('email', action.email);
    case constants.UPDATE_PHONE:
      return state.set('phone', action.phone);
    case constants.UPDATE_HOUSE_NAME:
      return state.set('houseName', action.houseName);
    case constants.UPDATE_STREET:
      return state.set('street', action.street);
    case constants.UPDATE_SUBURB:
      return state.set('suburb', action.suburb);
    case constants.UPDATE_STATE:
      return state.set('state', action.state);
    case constants.UPDATE_POSTCODE:
      return state.set('postcode', action.postcode);
    case constants.UPDATE_COUNTRY:
      return state.set('country', action.country);
    default:
      return state;
  }
};

export default cardReducer;
