import * as constants from '../constants';
import * as actions from '../';

describe('actions', () => {
  it('updateName has a type of UPDATE_NAME', () => {
    const name = 'some_value'
    const action = actions.updateName(name);
    
    expect(action.type).toBe(constants.UPDATE_NAME);
    expect(action.name).toBe(name);
  });

  it('updateSurname has a type of UPDATE_SURNAME', () => {
    const surname = 'some_value'
    const action = actions.updateSurname(surname);
    
    expect(action.type).toBe(constants.UPDATE_SURNAME);
    expect(action.surname).toBe(surname);
  });

  it('updateEmail has a type of UPDATE_EMAIL', () => {
    const email = 'some_email'
    const action = actions.updateEmail(email);
    
    expect(action.type).toBe(constants.UPDATE_EMAIL);
    expect(action.email).toBe(email);
  });

  it('updatePhone has a type of UPDATE_PHONE', () => {
    const phone = 'some_phone_num'
    const action = actions.updatePhone(phone);
    
    expect(action.type).toBe(constants.UPDATE_PHONE);
    expect(action.phone).toBe(phone);
  });

  it('updateHouseName has a type of UPDATE_HOUSE_NAME', () => {
    const houseName = 'some_house_name'
    const action = actions.updateHouseName(houseName);
    
    expect(action.type).toBe(constants.UPDATE_HOUSE_NAME);
    expect(action.houseName).toBe(houseName);
  });

  it('updateStreet has a type of UPDATE_STREET', () => {
    const street = 'some_street'
    const action = actions.updateStreet(street);
    
    expect(action.type).toBe(constants.UPDATE_STREET);
    expect(action.street).toBe(street);
  });

  it('updateSuburb has a type of UPDATE_SUBURB', () => {
    const suburb = 'some_suburb'
    const action = actions.updateSuburb(suburb);
    
    expect(action.type).toBe(constants.UPDATE_SUBURB);
    expect(action.suburb).toBe(suburb);
  });

  it('updateState has a type of UPDATE_STATE', () => {
    const state = 'some_state'
    const action = actions.updateState(state);
    
    expect(action.type).toBe(constants.UPDATE_STATE);
    expect(action.state).toBe(state);
  });

  it('updateCountry has a type of UPDATE_COUNTRY', () => {
    const country = 'some_country'
    const action = actions.updateCountry(country);
    
    expect(action.type).toBe(constants.UPDATE_COUNTRY);
    expect(action.country).toBe(country);
  });

  it('updateCountry has a type of UPDATE_AVATAR', () => {
    const avatarUrl = 'some_avatar_url'
    const action = actions.updateAvatar(avatarUrl);
    
    expect(action.type).toBe(constants.UPDATE_AVATAR);
    expect(action.avatar).toBe(avatarUrl);
  });
});
