import React from 'react';
import { shallow } from 'enzyme';

import Home from '../index';

describe('Home', () => {
  const wrapper = shallow(<Home />);
  const wrapperWithProps = shallow(<Home name="Carlos" />);

  it('should render Home component', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render by default Hello World', () => {
    expect(wrapper.text()).toBe('Hello World');
  });

  it('should render the name prop', () => {
    expect(wrapperWithProps.text()).toBe('Hello Carlos');
  });

  it('should has .Home class', () => {
    expect(wrapper.find('h1').hasClass('Home')).toBe(true);
  });
})
