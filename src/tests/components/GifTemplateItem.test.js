import React from 'react';
import { shallow } from 'enzyme';
import { GifTemplateItem } from '../../components/GifTemplateItem';

describe('Tests for <GifTemplateItem />', () => {

  const title = 'title';
  const url = 'https://localhost/image.jpg';
  const wrapper = shallow(<GifTemplateItem title={title} url={url} />);

  test('It should show the component without any problems', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('It has to have a parragraph with the title', () => {
    const parragraph = wrapper.find('p');
    expect(parragraph.text().trim()).toBe(title);
  })

  test('It should have an image that matches the url and alt of the props', () => {
    const image = wrapper.find('img');
    expect(image.prop('src')).toBe(url);
    expect(image.prop('alt')).toBe(title);

  })

  test('It should have the class animate__bounce', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__bounce')).toBe(true);
  })


});