import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import withTheme from '../../util/withTheme';
import HelpIcon from './';

export default {
  title: 'webapp/HelpIcon',
  component: HelpIcon,
  decorators: [withKnobs],
};

export const Default = withTheme(() => (
  <div style={{ marginTop: '80px' }}>
    <HelpIcon>
      <div style={{ width: '300px' }}>
        {text(
          'help content',
          `A series of events organized throughout time.
          Example: Events leading up to WWII.`
        )}
      </div>
    </HelpIcon>
  </div>
));
