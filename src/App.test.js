import React from 'react';
import { mount } from 'enzyme';

// Import ColorPicker to test
import { ColorPicker } from './App';

it('Updates background color', () => {
  const colorPicker = mount(<ColorPicker />);

  // Make sure there are three sliders
  const sliders = colorPicker.find('input[type="range"]');
  expect(sliders).toHaveLength(3);

  // The initial background color should be 0, 0, 0
  expect(colorPicker.find('#color')).toHaveStyle('background', 'rgb(0,0,0)');

  // "Move" the sliders
  sliders.forEach(slider =>
    slider.simulate('change', { target: { value: '100' } })
  );

  // The color box background should be set to slider values
  expect(colorPicker.find('#color')).toHaveStyle(
    'background',
    'rgb(100,100,100)'
  );

  // The three numeric values should be updated
  const values = colorPicker.find('span');
  expect(values).toHaveLength(3);
  values.forEach(value => {
    expect(value.text()).toBe('100');
  });
});
