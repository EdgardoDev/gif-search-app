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

  test('It should call setAppCategories and clear the input text', () => {
    const value = 'Hello World!';

    // Simulate inputChange
    wrapper.find('input').simulate('change', { target: { value } });

    // Simulate submit
    wrapper.find('form').simulate('submit', { preventDefault() { } });

    // Call setAppCategories
    expect(setAppCategories).toHaveBeenCalled();

    // Clear the input value to ''
    expect(wrapper.find('input').prop('value')).toBe('');
  })

})