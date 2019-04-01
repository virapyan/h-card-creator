import React from 'react';
import { shallow } from 'enzyme';
import ActionButton from '../ActionButton';
import { StyledButton } from '../styles';

describe('ActionButton', () => {
  it('should render ActionButton', () => {
    const title = 'some_title';
    const clickHandler = jest.fn();
    const marginRight = '10';

    const renderedComponent = shallow(
      <ActionButton
        title={title}
        clickHandler={clickHandler}
        marginRight={marginRight}
      />);

    const styledButton = renderedComponent.find(StyledButton);
    
    expect(styledButton.prop('marginRight')).toBe(marginRight);
    expect(styledButton.prop('onClick')).toBe(clickHandler);
    expect(styledButton.text()).toBe(title);
  });
});
