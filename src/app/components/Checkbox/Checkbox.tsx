import React from 'react';
import styles from './Checkbox.module.css';

type CheckboxProps = {
  value: string,
  id?: string,
  checked?: boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
};

const Checkbox: React.FC<CheckboxProps> = ({
  value, id, onChange, checked = false,
}) => (
  <input
    type="checkbox"
    className={styles.checkbox}
    value={value}
    checked={checked}
    onChange={onChange}
    id={id}
  />
);

export default Checkbox;
