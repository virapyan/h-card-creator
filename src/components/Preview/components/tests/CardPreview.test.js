import React from 'react';
import { shallow } from 'enzyme';

import CardPreview from '../CardPreview';
import Avatar from '../Avatar';
import PreviewRow from '../PreviewRow';
import { selectCardProp } from '../../../../selectors';

import {
  CardWrapper,
  UserName,
} from '../styles';

jest.mock('react-redux', () => ({
  connect: (
    mapStateToProps, mapDispatchToProps) =>
      (Component) => ({ mapStateToProps, mapDispatchToProps, Component }
  ),
}));

jest.mock('../../../../selectors', () => ({
  selectCardProp: jest.fn(() => ['MOCK_PROP']),
}));

const connectExports = CardPreview;
const mapStateToProps = connectExports.mapStateToProps;
const Component = connectExports.Component;

describe('CardPreview', () => {
  it('should render CardPreview', () => {
    const renderedComponent = shallow(<Component />);

    expect(renderedComponent.find(CardWrapper).length).toBe(1);
    expect(renderedComponent.find(UserName).length).toBe(1);
    expect(renderedComponent.find(Avatar).length).toBe(1);
    expect(renderedComponent.find(PreviewRow).length).toBe(6);
  });

  it('should assign all props', () => {
    const props = {
      name: 'some_name',
      surname: 'some_surname',
      avatar: 'avatar_src',
      email: 'some_email',
      phone: 'some_phone_num',
      houseName: 'some_house_name',
      street: 'some_street',
      suburb: 'some_suburb',
      state: 'some_state',
      postcode: 'some_postcode',
      country: 'some_country',
    };

    const fullName = `${props.name} ${props.surname}`
    const addressLine1 = `${props.houseName} ${props.street}`;
    const addressLine2 = `${props.suburb} , ${props.state}`;

    const renderedComponent = shallow(<Component {...props}/>);

    expect(renderedComponent.find(UserName).text()).toBe(fullName);
    expect(renderedComponent.find(Avatar).prop('src')).toBe(props.avatar);
    expect(renderedComponent.find(PreviewRow).at(0).prop('value')).toBe(props.email);
    expect(renderedComponent.find(PreviewRow).at(1).prop('value')).toBe(props.phone);
    expect(renderedComponent.find(PreviewRow).at(2).prop('value')).toBe(addressLine1);
    expect(renderedComponent.find(PreviewRow).at(3).prop('value')).toBe(addressLine2);
    expect(renderedComponent.find(PreviewRow).at(4).prop('value')).toBe(props.postcode);
    expect(renderedComponent.find(PreviewRow).at(5).prop('value')).toBe(props.country);
  });

  describe('mapStateToProps', () => {
    it('should map to props', () => {
      const props = mapStateToProps();
      expect(selectCardProp.mock.calls.length).toBe(11);
      
      for (let prop in props) {
        expect(props[prop][0]).toBe('MOCK_PROP');
      }
    });
  });
});
