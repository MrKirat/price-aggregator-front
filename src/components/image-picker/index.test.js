import React from 'react';

import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import ImagePicker from './index';
import { RecoilRoot } from 'recoil';

it('renders without crashing', () => {
  const output = mount(<RecoilRoot><ImagePicker /></RecoilRoot>);
  expect(shallowToJson(output)).toMatchSnapshot();
});

it('renders with ImagePicker', () => {
  const output = mount(<RecoilRoot><ImagePicker /></RecoilRoot>);
  expect(output.find('ImagePicker')).toHaveLength(1);
});

it('renders with input', () => {
  const output = mount(<RecoilRoot><ImagePicker /></RecoilRoot>);
  expect(output.find('input')).toHaveLength(1);
});

it('renders with icon', () => {
  const output = mount(<RecoilRoot><ImagePicker /></RecoilRoot>);
  expect(output.find('svg')).toHaveLength(1);
});