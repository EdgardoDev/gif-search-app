import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddNewCategory } from '../../components/AddNewCategory';

describe('Tests for the component <AddNewCategory />', () => {

  const setAppCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddNewCategory setAppCategories={setAppCategories} />)
  })

  test('It should render without any problems.', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('It should evaluate changes on the input', () => {
    const input = wrapper.find('input');
    const value = 'Hello World!';
    input.simulate('change', { target: { value } });

    expect(wrapper.find('p').text().trim()).toBe(value);
  })

  test('It should NOT post information on submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() { } });
    expect(setAppCategories).not.toHaveBeenCalled();
  })

})