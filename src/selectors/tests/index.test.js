import { fromJS } from 'immutable';
import {
  selectCardProp,
} from '../';

describe('selectors', () => {
  let mockedState = fromJS({
    card: {
      name: '',
      surname: '',
    }
  });
  
  it('should select prop', () => {
    mockedState = mockedState.setIn(['card', 'name'], 'some_name');
    mockedState = mockedState.setIn(['card', 'surname'], 'some_surname');
    
    expect(selectCardProp(mockedState, 'name')).toBe('some_name');
    expect(selectCardProp(mockedState, 'surname')).toBe('some_surname');
  });
});
