import React from 'react';
import { shallow } from 'enzyme';
import { GifTemplateItem } from '../../components/GifTemplateItem';

describe('Tests for <GifTemplateItem />', () => {

  const title = 'title';
  const url = 'https://localhost:8080/';

  test('It should show the component without any problems', () => {
    const wrapper = shallow(<GifTemplateItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  })
});