import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../Avatar';
import {
  SvgWrapper,
  StyledProfileImage,
} from '../styles';

describe('Avatar', () => {
  it('should render content when src is defined', () => {
    const src = 'https://some_image_url';
    const renderedComponent = shallow(
      <Avatar src={src} />
    );

    expect(renderedComponent.find(StyledProfileImage).length).toBe(1);
    expect(renderedComponent.find(SvgWrapper).length).toBe(0);
    expect(renderedComponent.find(StyledProfileImage).prop('src')).toBe(src);
  });

  it('should render content when src is not defined', () => {
    const renderedComponent = shallow(
      <Avatar src="" />
    );

    expect(renderedComponent.find(StyledProfileImage).length).toBe(0);
    expect(renderedComponent.find(SvgWrapper).length).toBe(1);
  });
});
