import React from 'react';
import { shallow } from 'enzyme';
import renderTests from '~/test-helpers';
import CloudsSvg from './Clouds';

function generateWrapper(props) {
  return shallow(<CloudsSvg {...props} />);
}

describe('CloudsSvg', () => {
  renderTests(() => generateWrapper());
});
