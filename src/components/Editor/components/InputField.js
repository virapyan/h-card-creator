import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectCardProp } from '../../../selectors';
import {
  InputFieldWrapper,
  StyledInput,
  InputTitle,
} from './styles';

class InputField extends React.Component {
  inputChangeHandler = (event) => {
    const newValue = event.target.value;
    const {
      changeAction,
      updateField,
    } = this.props;
    
    updateField(changeAction, newValue);
  };
  
  render() {
    const {
      title,
      marginRight,
      filedValue,
    } = this.props;
    
    return (
      <InputFieldWrapper marginRight={marginRight}>
        <InputTitle color="rgb(123, 141, 155)" fontSize="12">
          { title }
        </InputTitle>
        <StyledInput
          onChange={this.inputChangeHandler}
          value={filedValue}
        />
      </InputFieldWrapper>
    );
  }
} 

InputField.propTypes = {
  title: PropTypes.string,
  marginRight: PropTypes.string,
  changeAction: PropTypes.func,
  updateField: PropTypes.func,
  filedValue: PropTypes.string,
  selectorValue: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  updateField: (command, value) => {
    return dispatch(command(value))
  },
});

const mapStateToProps = (state, ownProps) => ({
  filedValue: selectCardProp(state, ownProps.selectorValue),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
