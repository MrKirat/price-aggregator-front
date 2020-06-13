import React from 'react';

import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Camera from './index';
import { RecoilRoot } from 'recoil';

it('renders without crashing', () => {
  const output = mount(<RecoilRoot><Camera /></RecoilRoot>);
  expect(shallowToJson(output)).toMatchSnapshot();
});

it('renders with Camera', () => {
  const output = mount(<RecoilRoot><Camera /></RecoilRoot>);
  expect(output.find('Camera')).toHaveLength(1);
});

it('renders with Webcam', () => {
  const output = mount(<RecoilRoot><Camera /></RecoilRoot>);
  expect(output.find('Webcam')).toHaveLength(1);
});

it('renders with video', () => {
  const output = mount(<RecoilRoot><Camera /></RecoilRoot>);
  expect(output.find('video')).toHaveLength(1);
});

it('renders with icon', () => {
  const output = mount(<RecoilRoot><Camera /></RecoilRoot>);
  expect(output.find('svg')).toHaveLength(1);
});