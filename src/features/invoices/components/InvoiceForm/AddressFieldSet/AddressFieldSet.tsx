import React from 'react';
import styles from './AddressFieldSet.module.css';
import FormFieldSet from '../../../../../app/components/FormFieldSet/FormFieldSet';
import FormFieldFormik from '../../../../../app/components/FormFieldFormik/FormFieldFormik';

type AddressFieldSetProps = {
  name: string,
  legend?: string
};

const AddressFieldSet: React.FC<AddressFieldSetProps> = ({ name, legend = '' }) => (
  <FormFieldSet legend={legend}>
    <div className={styles.addressFieldset}>
      <FormFieldFormik id="from-street" name={`${name}.street`} label="Street Address" />
      <FormFieldFormik id="from-city" name={`${name}.city`} label="City" />
      <FormFieldFormik id="from-post-code" name={`${name}.postCode`} label="Post Code" />
      <FormFieldFormik id="from-country" name={`${name}.country`} label="Country" />
    </div>
  </FormFieldSet>
);

export default AddressFieldSet;
