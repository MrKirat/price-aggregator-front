import React from 'react';

import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import CameraToggle from './index';
import { RecoilRoot } from 'recoil';

it('renders without crashing', () => {
  const output = mount(<RecoilRoot><CameraToggle /></RecoilRoot>);
  expect(shallowToJson(output)).toMatchSnapshot();
});

it('renders with CameraToggle', () => {
  const output = mount(<RecoilRoot><CameraToggle /></RecoilRoot>);
  expect(output.find('CameraToggle')).toHaveLength(1);
});

it('renders with icon', () => {
  const output = mount(<RecoilRoot><CameraToggle /></RecoilRoot>);
  expect(output.find('svg')).toHaveLength(1);
});