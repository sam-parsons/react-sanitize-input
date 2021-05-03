import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sanitize from '../index';
import CreateSanitizerMock from '../__mocks__/index.mock';

// window.Sanitizes mock fn will be available to all tests
CreateSanitizerMock();

Enzyme.configure({ adapter: new Adapter() });

test('should render input element', () => {
  const wrapper = mount(
    <Sanitize>
      <input type="text" />
    </Sanitize>
  );
  expect(wrapper.find('input').exists()).toBe(true);
});
