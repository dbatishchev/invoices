import React from 'react';
import { Field, FieldProps } from 'formik';
import FormField from '../FormField/FormField';
import Input from '../Input/Input';

type FormFieldFormikProps = {
  id: string,
  name: string,
  label: string,
  children?: (props: FieldProps) => React.ReactNode,
};

const FormFieldFormik: React.FC<FormFieldFormikProps> = ({
  id, name, label, children,
}) => (
  <Field name={name}>
    {({
      field, // { name, value, onChange, onBlur }
      form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      meta,
    }: FieldProps) => (
      <FormField
        id={id}
        label={label}
        errors={meta.touched && meta.error ? meta.error : ''}
      >
        {children ? children({ field, form, meta }) : <Input {...field} hasError={Boolean(meta.touched && meta.error)} />}
      </FormField>
    )}
  </Field>
);

export default FormFieldFormik;
