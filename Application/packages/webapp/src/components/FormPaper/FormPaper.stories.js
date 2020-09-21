import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import withTheme from '../../util/withTheme';
import Form from './';

export default {
  title: 'webapp/FormPaper',
  component: Form,
  decorators: [withKnobs],
};

export const Default = withTheme(() => (
  <Form title={text('title', 'Form Title')}>Form Content</Form>
));
