import React from 'react';

import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import App from './index';
import { RecoilRoot } from 'recoil';

it('renders without crashing', () => {
  const output = shallow(<RecoilRoot><App /></RecoilRoot>);
  expect(shallowToJson(output)).toMatchSnapshot();
});