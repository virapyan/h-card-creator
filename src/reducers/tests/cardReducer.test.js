import { fromJS } from 'immutable';
import cardReducer from '../cardReducer';
import * as actions from '../../actions';

jest.mock('../../utils/parser', () => ({
  fromHtml: jest.fn(() => 'MOCK_STATE'),
}));

describe('cardReducer', () => {
  let state;
  
  beforeEach(() => {
    state = fromJS({
      name: '',
      surname: '',
      email: '',
      phone: '',
      houseName: '',
      street: '',
      suburb: '',
      state: '',
      postcode: '',
      country: '',
      avatar: '',
    });
  });

  it('should return the initial state', () => {
    expect(cardReducer(undefined, {})).toEqual('MOCK_STATE');
  });

  it('should handle the updateName action correctly', () => {
    const expectedResult = state.set('name', 'some_name');
    expect(cardReducer(state, actions.updateName('some_name'))).toEqual(expectedResult);
  });

  it('should handle the updateSurname action correctly', () => {
    const expectedResult = state.set('surname', 'some_surname');
    expect(cardReducer(state, actions.updateSurname('some_surname'))).toEqual(expectedResult);
  });

  it('should handle the updateEmail action correctly', () => {
    const expectedResult = state.set('email', 'some_email');
    expect(cardReducer(state, actions.updateEmail('some_email'))).toEqual(expectedResult);
  });

  it('should handle the updatePhone action correctly', () => {
    const expectedResult = state.set('phone', 'some_phone_num');
    expect(cardReducer(state, actions.updatePhone('some_phone_num'))).toEqual(expectedResult);
  });

  it('should handle the updateHouseName action correctly', () => {
    const expectedResult = state.set('houseName', 'some_house_name');
    expect(cardReducer(state, actions.updateHouseName('some_house_name'))).toEqual(expectedResult);
  });

  it('should handle the updateStreet action correctly', () => {
    const expectedResult = state.set('street', 'some_street');
    expect(cardReducer(state, actions.updateStreet('some_street'))).toEqual(expectedResult);
  });

  it('should handle the updateSuburb action correctly', () => {
    const expectedResult = state.set('suburb', 'some_suburb');
    expect(cardReducer(state, actions.updateSuburb('some_suburb'))).toEqual(expectedResult);
  });

  it('should handle the updateState action correctly', () => {
    const expectedResult = state.set('state', 'some_state');
    expect(cardReducer(state, actions.updateState('some_state'))).toEqual(expectedResult);
  });

  it('should handle the updatePostcode action correctly', () => {
    const expectedResult = state.set('postcode', 'some_postcode');
    expect(cardReducer(state, actions.updatePostcode('some_postcode'))).toEqual(expectedResult);
  });

  it('should handle the updateCountry action correctly', () => {
    const expectedResult = state.set('country', 'some_country');
    expect(cardReducer(state, actions.updateCountry('some_country'))).toEqual(expectedResult);
  });

  it('should handle the updateAvatar action correctly', () => {
    const expectedResult = state.set('avatar', 'some_image_url');
    expect(cardReducer(state, actions.updateAvatar('some_image_url'))).toEqual(expectedResult);
  });
});
