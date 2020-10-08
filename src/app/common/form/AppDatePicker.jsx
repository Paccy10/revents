import React from 'react';
import { useField, useFormikContext } from 'formik';
import { FormField, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppDatePicker = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  return (
    <FormField error={meta.touched && !!meta.error}>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => setFieldValue(field.name, value)}
      />
      {meta.touched && !!meta.error && (
        <Label basic color='red' content={meta.error} pointing />
      )}
    </FormField>
  );
};

export default AppDatePicker;
