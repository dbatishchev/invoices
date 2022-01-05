import React from 'react';
import { Field, FieldProps } from 'formik';
import styles from './BillDescriptionFieldSet.module.css';
import FormField from '../../../../../app/components/FormField/FormField';
import Input from '../../../../../app/components/Input/Input';
import FormFieldSet from '../../../../../app/components/FormFieldSet/FormFieldSet';
import Select from '../../../../../app/components/Select/Select';
import FormFieldFormik from '../../../../../app/components/FormFieldFormik/FormFieldFormik';
import DatePicker from '../../../../../app/components/DatePicker/DatePicker';

type BillDescriptionFieldSetProps = {
  legend?: string
};

const BillDescriptionFieldSet: React.FC<BillDescriptionFieldSetProps> = ({ legend = '' }) => (
  <FormFieldSet legend={legend}>
    <div className={styles.billDescriptionFieldset}>
      <FormFieldFormik id="date" name="paymentDue" label="Invoice Date">
        {({ field, form }: FieldProps) => (
          <DatePicker
            value={field.value}
            onChange={(value: Date) => form.setFieldValue(field.name, value)}
          />
        )}
      </FormFieldFormik>

      <FormFieldFormik id="payment-terms" name="paymentTerms" label="Payment Terms">
        {({ field, form }: FieldProps) => (
          <Select
            name={field.name}
            value={field.value}
            options={[
              { value: 1, label: 'Net 1 Day' },
              { value: 7, label: 'Net 7 Days' },
              { value: 14, label: 'Net 14 Days' },
              { value: 30, label: 'Net 30 Days' },
            ]}
            onChange={(value?: string | number) => form.setFieldValue(field.name, value)}
            onBlur={field.onBlur}
          />
        )}
      </FormFieldFormik>

      <FormField id="description" label="Project Description">
        <Field id="description" name="description" as={Input} />
      </FormField>
    </div>
  </FormFieldSet>
);

export default BillDescriptionFieldSet;
