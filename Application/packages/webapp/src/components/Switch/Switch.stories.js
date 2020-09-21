import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';

import withTheme from '../../util/withTheme';
import Switch from './';

export default {
  title: 'webapp/Switch',
  component: Switch,
  decorators: [withKnobs],
};

export const Default = withTheme(() => {
  const width = number('width', 100);
  return (
    <Switch
      key={width}
      width={width}
      label={text('label', `Label`)}
      labelPlacement={select('labelPlacement', ['top', 'bottom'], 'top')}
      onChange={action('change')}
    />
  );
});

export const Labels = withTheme(() => {
  const width = number('width', 100);
  return (
    <Switch
      key={width}
      width={width}
      label1={text('label1', `Left\nLabel`)}
      label2={text('label2', 'Right\nLabel')}
    />
  );
});
