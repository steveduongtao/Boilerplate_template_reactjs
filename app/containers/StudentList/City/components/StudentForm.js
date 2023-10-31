import { Box, Button } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputField, RadioGroupField, SelectField } from '../../../../components/FormFields';

const schema = yup
  .object({
    name: yup
      .string()
      .required('Please enter name.')
      .test('two-word', 'Please enter at least two words.', value => {
        if (!value) return true;
        const parts = value.split(' ') || [];
        return parts.filter(x => !!x).length >= 2;
      }),
    age: yup
      .number()
      .positive('Please enter a positive number.')
      .min(18, 'Min is 18.')
      .max(60, 'Max is 60.')
      .integer('Please enter an integer!')
      .required('Please enter age.')
      .typeError('Please enter a valid number.'),
    mark: yup
      .number()
      .positive('Please enter a positive number.')
      .min(0, 'Min is 0')
      .max(10, 'Max is 10')
      .required('Please enter mark.')
      .typeError('Please enter a valid number.'),
    gender: yup
      .string()
      .oneOf(['male', 'female'], 'Please select either male or female.')
      .required('Please select gender.'),
    city: yup.string().required('Please select city.'),
  })
  .required();

function StudentForm(props) {
  const { localData, onSubmit } = props;
  const { cityOptions } = localData;
  const { control, handleSubmit } = useForm({
    defaultValues: localData,
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = formValues => {
    onSubmit(formValues);
  };
  return (
    <Box maxWidth={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {/* FORM FIELDS */}
        <InputField name="name" control={control} label="Full Name" />
        <RadioGroupField
          name="gender"
          control={control}
          label="Gender"
          options={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]}
        />
        <InputField name="age" control={control} label="Age" />
        <InputField name="mark" control={control} label="Mark" />
        <SelectField name="city" control={control} label="City" options={cityOptions} />
        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default StudentForm;
