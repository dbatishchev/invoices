import React from 'react';
import styles from './FormFieldSet.module.css';

type FormFieldSetProps = {
  legend?: string,
  boldLegend?: boolean,
  className?: string,
  children: React.ReactNode,
};

const FormFieldSet: React.FC<FormFieldSetProps> = ({
  children, className = '', legend = '', boldLegend = false,
}) => (
  <fieldset className={`${styles.fieldSet} ${className}`}>
    {legend && <legend className={`${styles.legend} ${boldLegend ? styles.boldLegend : ''}`}>{legend}</legend>}
    {children}
  </fieldset>
);

export default FormFieldSet;
