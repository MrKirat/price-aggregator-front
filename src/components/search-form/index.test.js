import React from 'react';

import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import SearchForm from './index';
import { RecoilRoot } from 'recoil';

it('renders without crashing', () => {
  const output = mount(<RecoilRoot><SearchForm /></RecoilRoot>);
  expect(shallowToJson(output)).toMatchSnapshot();
});

it('renders with SearchForm', () => {
  const output = mount(<RecoilRoot><SearchForm /></RecoilRoot>);
  expect(output.find('SearchForm')).toHaveLength(1);
});

it('renders with input', () => {
  const output = mount(<RecoilRoot><SearchForm /></RecoilRoot>);
  expect(output.find('input')).toHaveLength(1);
});