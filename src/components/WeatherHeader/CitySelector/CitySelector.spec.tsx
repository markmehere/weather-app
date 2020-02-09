import React from 'react';
import { shallow, mount } from 'enzyme';
import { CitySelector } from './CitySelector';

describe('<CitySelector />', () => {

  const defaultProps = {
    value: { value: 1105779, label: 'Sydney, AU' },
    onChange: jest.fn()
  }

  it('should pass through value', () => {
    const result = mount(<CitySelector {...defaultProps}  />);
    expect(result.find('StateManager').prop('value')).toEqual({ value: 1105779, label: 'Sydney, AU' });
  });

  it('matches snapshot', () => {
    const result = shallow(<CitySelector {...defaultProps}  />);
    expect(result).toMatchSnapshot();
  });

});
