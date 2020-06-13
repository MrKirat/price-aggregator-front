import React from 'react';

import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Result from './index';
import { RecoilRoot } from 'recoil';

it('renders without crashing', () => {
  const output = mount(<RecoilRoot><Result /></RecoilRoot>);
  expect(shallowToJson(output)).toMatchSnapshot();
});

it('renders with Result', () => {
  const output = mount(<RecoilRoot><Result /></RecoilRoot>);
  expect(output.find('Result')).toHaveLength(1);
});

it('renders with WaitingMessage', () => {
  const output = mount(<RecoilRoot><Result /></RecoilRoot>);
  expect(output.find('WaitingMessage')).toHaveLength(1);
});