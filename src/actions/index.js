import * as constants from './constants';

export const updateName = (name) => {
  return {
    type: constants.UPDATE_NAME,
    name,
  };
}

export const updateSurname = (surname) => {
  return {
    type: constants.UPDATE_SURNAME,
    surname,
  };
}

export const updateEmail = (email) => {
  return {
    type: constants.UPDATE_EMAIL,
    email,
  };
}

export const updatePhone = (phone) => {
  return {
    type: constants.UPDATE_PHONE,
    phone,
  };
}

export const updateHouseName = (houseName) => {
  return {
    type: constants.UPDATE_HOUSE_NAME,
    houseName,
  };
}

export const updateStreet = (street) => {
  return {
    type: constants.UPDATE_STREET,
    street,
  };
}

export const updateSuburb = (suburb) => {
  return {
    type: constants.UPDATE_SUBURB,
    suburb,
  };
}

export const updateState = (state) => {
  return {
    type: constants.UPDATE_STATE,
    state,
  };
}

export const updatePostcode = (postcode) => {
  return {
    type: constants.UPDATE_POSTCODE,
    postcode,
  };
}

export const updateCountry = (country) => {
  return {
    type: constants.UPDATE_COUNTRY,
    country,
  };
}

export const updateAvatar = (avatar) => {
  return {
    type: constants.UPDATE_AVATAR,
    avatar,
  };
}