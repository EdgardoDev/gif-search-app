import React from 'react';
import { shallow } from 'enzyme';
import { GifTemplateItem } from '../../components/GifTemplateItem';

describe('Tests for <GifTemplateItem />', () => {
  test('It should show the component without any problems', () => {
    const wrapper = shallow(<GifTemplateItem />)
    expect(wrapper).toMatchSnapshot();
  })
});