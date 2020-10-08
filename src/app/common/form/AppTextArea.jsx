import React from 'react';
import { useField } from 'formik';
import { FormField, Label } from 'semantic-ui-react';

const AppTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <textarea {...field} {...props} />
      {meta.touched && !!meta.error && (
        <Label basic color='red' content={meta.error} pointing />
      )}
    </FormField>
  );
};

export default AppTextArea;
