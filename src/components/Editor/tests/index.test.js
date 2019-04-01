import React from 'react';
import { shallow } from 'enzyme';
import Editor from '../';
import { EditorWrapper } from '../styles';
import InputField from '../components/InputField';
import ButtonSection from '../components/ButtonSection';

describe('Editor', () => {
  it('should render Editor', () => {
    const renderedComponent = shallow(<Editor />);

    expect(renderedComponent.find(EditorWrapper).length).toBe(1);
    expect(renderedComponent.find(InputField).length).toBe(10);
    expect(renderedComponent.find(ButtonSection).length).toBe(1);
  });
});
