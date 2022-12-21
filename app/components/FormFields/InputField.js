import { TextField } from '@material-ui/core';
import React from 'react';
import { useController } from 'react-hook-form';

export function InputField(props) {
  const { name, control, label, ...inputProps } = props;
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      value={value}
      label={label}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      error={invalid}
      helperText={error && error.message}
      variant="outlined"
      inputProps={inputProps}
    />
  );
}
