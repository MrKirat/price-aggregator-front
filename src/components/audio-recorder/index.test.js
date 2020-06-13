import React from 'react';

import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import AudioRecorder from './index';
import { RecoilRoot } from 'recoil';

it('renders without crashing', () => {
  const output = mount(<RecoilRoot><AudioRecorder /></RecoilRoot>);
  expect(shallowToJson(output)).toMatchSnapshot();
  expect(output.find('svg')).toHaveLength(1);
});

it('renders with icon', () => {
  const output = mount(<RecoilRoot><AudioRecorder /></RecoilRoot>);
  expect(output.find('svg')).toHaveLength(1);
});

it('renders with AudioRecorder', () => {
  const output = mount(<RecoilRoot><AudioRecorder /></RecoilRoot>);
  expect(output.find('AudioRecorder')).toHaveLength(1);
});