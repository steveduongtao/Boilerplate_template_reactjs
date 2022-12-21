import { FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import { useController } from 'react-hook-form';

export function SelectField(props) {
  const { name, control, label, disabled, options } = props;
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <FormControl
      fullWidth
      size="small"
      variant="outlined"
      disabled={disabled}
      margin="normal"
      component="fieldset"
      error={invalid}
    >
      <InputLabel id={`${name}_label`}>{label}</InputLabel>
      <Select
        labelId={`${name}_label`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label={label}
      >
        {options &&
          options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </Select>
      <FormHelperText>{error && error.message}</FormHelperText>
    </FormControl>
  );
}
