import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

import withTheme from '../../util/withTheme';
import Slider from './';

export default {
  title: 'webapp/Slider',
  component: Slider,
  decorators: [withKnobs],
};

export const Default = withTheme(() => (
  <div style={{ padding: '0 40px' }}>
    <Slider
      defaultValue={1}
      min={number('min', 1)}
      max={number('max', 10)}
      step={number('step', 1)}
      onChange={action('change')}
    />
  </div>
));
