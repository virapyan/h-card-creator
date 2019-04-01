import React from 'react';
import { shallow } from 'enzyme';
import PreviewRow from '../PreviewRow';
import {
  PreviewRowWrapper,
  PreviewRowTitle,
  PreviewRowValue,
} from '../styles';

describe('PreviewRow', () => {
  it('should render PreviewRow', () => {
    const renderedComponent = shallow(<PreviewRow />);

    expect(renderedComponent.find(PreviewRowWrapper).length).toBe(1);
    expect(renderedComponent.find(PreviewRowTitle).length).toBe(1);
    expect(renderedComponent.find(PreviewRowValue).length).toBe(1);
  });

  it('should assign all props', () => {
    const title = 'some_title';
    const value = 'some_value';

    const renderedComponent = shallow(
      <PreviewRow 
        title={title}
        value={value}
      />);

    expect(renderedComponent.find(PreviewRowTitle).text()).toBe(title);
    expect(renderedComponent.find(PreviewRowValue).text()).toBe(value);
  });
});
