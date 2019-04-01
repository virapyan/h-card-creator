import React from 'react';
import { shallow } from 'enzyme';
import Preview from '../';
import { PreviewWrapper } from '../styles';
import CardPreview from '../components/CardPreview';

describe('Preview', () => {
  it('should render content', () => {
    const renderedComponent = shallow(<Preview />);

    expect(renderedComponent.find(PreviewWrapper).length).toBe(1);
    expect(renderedComponent.find(CardPreview).length).toBe(1);
  });
});
