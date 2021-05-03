import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sanitize from '../index';

Enzyme.configure({ adapter: new Adapter() });

test('should render input element', () => {
  const wrapper = mount(
    <Sanitize>
      <input type="text" />
    </Sanitize>
  );
  expect(wrapper.find('input').exists()).toBe(true);
});
