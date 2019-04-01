import React from 'react';
import { shallow } from 'enzyme';
import InputField from '../InputField';
import { selectCardProp } from '../../../../selectors';

import {
  InputFieldWrapper,
  InputTitle,
  StyledInput,
} from '../styles';

jest.mock('react-redux', () => ({
  connect: (
    mapStateToProps, mapDispatchToProps) =>
      (Component) => ({ mapStateToProps, mapDispatchToProps, Component }
  ),
}));

jest.mock('../../../../actions', () => ({
  updateAvatar: jest.fn(() => 'MOCK_ACTION'),
}));

jest.mock('../../../../selectors', () => ({
  selectCardProp: jest.fn(() => 'MOCK_STATE'),
}));

const connectExports = InputField;
const mapDispatchToProps = connectExports.mapDispatchToProps;
const mapStateToProps = connectExports.mapStateToProps;
const Component = connectExports.Component;

describe('InputField', () => {
  it('should render InputField', () => {
    const renderedComponent = shallow(<Component  />);

    expect(renderedComponent.find(InputFieldWrapper).length).toBe(1);
    expect(renderedComponent.find(InputTitle).length).toBe(1);
    expect(renderedComponent.find(StyledInput).length).toBe(1);
  });

  it('should assign props correctly', () => {
    const title = 'some_title';
    const margin = '10';
    
    const renderedComponent = shallow(
      <Component 
        title={title} 
        marginRight={margin} />);

    expect(renderedComponent.find(InputFieldWrapper).prop('marginRight')).toBe(margin);
    expect(renderedComponent.find(InputTitle).text()).toBe(title);
  });

  it('should call updateField when inputChangeHandler is called', () => {
    const changeAction = jest.fn();
    const updateField = jest.fn();

    const renderedComponent = shallow(
      <Component 
        changeAction={changeAction} 
        updateField={updateField} />);
    
    renderedComponent.instance().inputChangeHandler({
      target: {
        value: 'some_value'
      }
    });
    
    expect(updateField.mock.calls.length).toBe(1);
    expect(updateField.mock.calls[0][0]).toBe(changeAction);
    expect(updateField.mock.calls[0][1]).toBe('some_value');
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch updateField to props', () => {
      const action = jest.fn();
      const dispatch = jest.fn();
      const props = mapDispatchToProps(dispatch);
      
      props.updateField(action, 'some_value');
      
      expect(action).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(action).toBeCalledWith('some_value');
    });
  });

  describe('mapStateToProps', () => {
    it('should map to props', () => {
      const props = mapStateToProps(true, {});
      
      expect(selectCardProp.mock.calls.length).toBe(1);
      expect(props.filedValue).toBe('MOCK_STATE');
    });
  });
});
