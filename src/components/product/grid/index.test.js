import React from 'react';

import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import ProductGrid from './index';
import { RecoilRoot } from 'recoil';

it('renders without crashing', () => {
  const output = mount(<RecoilRoot><ProductGrid /></RecoilRoot>);
  expect(shallowToJson(output)).toMatchSnapshot();
});

it('renders with ProductGrid', () => {
  const output = mount(<RecoilRoot><ProductGrid /></RecoilRoot>);
  expect(output.find('ProductGrid')).toHaveLength(1);
});