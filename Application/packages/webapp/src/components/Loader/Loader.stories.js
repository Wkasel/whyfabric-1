import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import withTheme from '../../util/withTheme';
import Loader from './';

export default {
  title: 'webapp/Loader',
  component: Loader,
  decorators: [withKnobs],
};

export const Default = withTheme(() => (
  <Loader loading={boolean('loading', true)}>
    <div style={{ paddign: '50px' }}>Content</div>
  </Loader>
));
