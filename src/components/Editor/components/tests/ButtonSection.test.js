import React from 'react';
import { shallow } from 'enzyme';

import ButtonSection from '../ButtonSection';
import ActionButton from '../ActionButton';
import { updateAvatar } from '../../../../actions';
import { selectCardState } from '../../../../selectors';

import { ButtonSectionWrapper } from '../styles';

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
  selectCardState: jest.fn(() => 'MOCK_STATE'),
}));

const connectExports = ButtonSection;
const mapDispatchToProps = connectExports.mapDispatchToProps;
const mapStateToProps = connectExports.mapStateToProps;
const Component = connectExports.Component;

describe('ButtonSection', () => {
  it('should render ButtonSection', () => {
    const renderedComponent = shallow(<Component updateAvatar={() => {}} />);

    expect(renderedComponent.find(ButtonSectionWrapper).length).toBe(1);
    expect(renderedComponent.find(ActionButton).length).toBe(2);
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch updateAvatar to props', () => {
      const dispatch = jest.fn();
      const props = mapDispatchToProps(dispatch);
      props.updateAvatar();
      
      expect(updateAvatar).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toBeCalledWith('MOCK_ACTION');
    });
  });

  describe('mapStateToProps', () => {
    it('should map to props', () => {
      const props = mapStateToProps();
      expect(selectCardState.mock.calls.length).toBe(1);
      expect(props.appState).toBe('MOCK_STATE');
    });
  });
});
