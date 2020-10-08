import React from 'react';
import { useField } from 'formik';
import { FormField, Label, Select } from 'semantic-ui-react';

const AppSelectInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <Select
        clearable
        value={field.value || null}
        onChange={(e, d) => helpers.setValue(d.value)}
        onBlur={() => helpers.setTouched(true)}
        {...props}
      />
      {meta.touched && !!meta.error && (
        <Label basic color='red' content={meta.error} pointing />
      )}
    </FormField>
  );
};

export default AppSelectInput;
