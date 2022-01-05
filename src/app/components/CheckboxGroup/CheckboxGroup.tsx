import React, { ChangeEvent } from 'react';
import styles from './CheckboxGroup.module.css';
import Checkbox from '../Checkbox/Checkbox';

type CheckboxGroupProps<T> = {
  values: { label: string, value: T }[],
  value: T[],
  onChange: (values: T[]) => void,
};

const CheckboxGroup = <T extends string>({ values, value, onChange }: CheckboxGroupProps<T>): React.ReactElement<CheckboxGroupProps<T>> => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: v, checked } = event.target;

    if (checked) {
      return onChange([...(value || []), v as T]);
    }

    return onChange(value?.filter((val) => val !== v));
  };

  return (
    <div className={styles.checkboxGroup}>
      {values.map(({ value: v, label }) => (
        <label key={v} className={styles.checkboxLabel}>
          <Checkbox
            value={v}
            checked={value?.includes(v)}
            onChange={handleChange}
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
