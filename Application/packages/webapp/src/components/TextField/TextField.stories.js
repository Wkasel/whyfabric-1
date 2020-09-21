import React from 'react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import MenuItem from '@material-ui/core/MenuItem';

import withTheme from '../../util/withTheme';
import TextField from './';

export default {
  title: 'webapp/TextField',
  component: TextField,
  decorators: [withKnobs],
};

export const Default = withTheme(() => (
  <TextField
    label={text('label', 'label')}
    helperText={text('helperText', 'helper text')}
    multiline={boolean('multiline', false)}
    InputProps={{
      startAdornment: text('startAdornment', ''),
      endAdornment: text('endAdornment', ''),
    }}
  />
));

export const maxLength = withTheme(() => {
  const [text, setText] = React.useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <TextField
      maxLength={number('maxLength', 20)}
      value={text}
      onChange={handleChange}
    />
  );
});

const options = [
  { value: 'yesterday', label: 'Yesterday' },
  { value: 'today', label: 'Today' },
  { value: 'tomorrow', label: 'Tomorrow' },
];

export const select = withTheme(() => {
  return (
    <TextField select label="Select">
      {options.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
});

export const Error = withTheme(() => (
  <TextField error={text('error', 'error message')} />
));
