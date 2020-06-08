import React from 'react';
import { shallow } from 'enzyme';
import App from './index';
import { RecoilRoot } from 'recoil';

it('renders without crashing', () => {
  shallow(<RecoilRoot><App /></RecoilRoot>);
});