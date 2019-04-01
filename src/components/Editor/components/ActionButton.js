import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const ActionButton = ({ title, clickHandler, marginRight }) => (
  <StyledButton
    marginRight={marginRight}
    onClick={clickHandler}>
    {title}
  </StyledButton>
);

ActionButton.propTypes = {
  title: PropTypes.string,
  clickHandler: PropTypes.func,
  marginRight: PropTypes.string,
};

export default ActionButton;
