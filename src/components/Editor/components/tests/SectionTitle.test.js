import React from 'react';
import { shallow } from 'enzyme';
import SectionTitle from '../SectionTitle';
import { SectionTitleWrapper} from '../styles';

describe('SectionTitle', () => {
  it('should render SectionTitle', () => {
    const title = 'some_title';
    const renderedComponent = shallow(<SectionTitle title={title} />);

    expect(renderedComponent.find(SectionTitleWrapper).length).toBe(1);
    expect(renderedComponent.find(SectionTitleWrapper).text()).toBe(title);
  });
});
