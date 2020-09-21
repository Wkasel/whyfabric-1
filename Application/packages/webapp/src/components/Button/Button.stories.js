import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import withTheme from '../../util/withTheme';
import Button from './';

export default {
  title: 'webapp/Button',
  component: Button,
  decorators: [withKnobs],
};

export const Default = withTheme(() => (
  <Button
    link={boolean('link', false)}
    width={number('width', '')}
    loading={boolean('loading', false)}
    onClick={action('clicked')}
  >
    Hello Button
  </Button>
));
