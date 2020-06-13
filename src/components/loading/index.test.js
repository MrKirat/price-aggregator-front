import React from 'react';

import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Loading from './index';

it('renders without crashing', () => {
  const output = mount(<Loading />);
  expect(shallowToJson(output)).toMatchSnapshot();
});

it('renders with Loading', () => {
  const output = mount(<Loading />);
  expect(output.find('Loading')).toHaveLength(2);
});