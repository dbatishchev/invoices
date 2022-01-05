import React, { FocusEventHandler } from 'react';
import ReactSelect from 'react-select';
import styles from './Select.module.css';
import DropdownIndicator from './DropdownIndicator/DropdownIndicator';

const customStyles = {
  indicatorSeparator: () => ({
    display: 'none',
  }),
  input: (provided: any) => ({
    ...provided,
    padding: 0,
    margin: 0,
  }),
  option: () => ({
    padding: '16px 24px',
    borderBottom: '1px solid var(--input-border-01);',
    cursor: 'pointer',

    fontFamily: 'Spartan',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '15px',
    letterSpacing: '-0.25px',
    color: 'var(--text-01)',

    ':last-child': {
      borderBottom: 'none',
    },
  }),
  control: (provided: any) => ({
    ...provided,
    minHeight: '49px',
    paddingLeft: '16px',
    border: '1px solid var(--input-border-01);',
    fontFamily: 'Spartan',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '15px',
    letterSpacing: '-0.25px',
    color: 'var(--text-01)',
    background: 'var(--input-bg-01)',
  }),
  menu: (provided: any) => ({
    ...provided,
    boxShadow: '0px 10px 20px rgba(72, 84, 159, 0.25)',
    borderRadius: '8px',
    background: 'var(--input-bg-01)',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'var(--text-01)',
  }),
};

type OptionType = {
  value: string | number;
  label: string;
};

type SelectProps = {
  name: string,
  value: string,
  options: OptionType[],
  onChange: (value?: string | number) => void,
  onBlur: FocusEventHandler<HTMLInputElement>
};

const Select: React.FC<SelectProps> = ({
  value, name, options, onChange, onBlur,
}) => {
  const selectedOption = options.find((o) => o.value === value);
  const handleChange = (option: OptionType | OptionType[] | null) => {
    if (Array.isArray(option)) {
      throw new Error('Unexpected type passed to ReactSelect onChange handler');
    }

    onChange(option?.value);
  };

  return (
    <ReactSelect
      name={name}
      components={{
        // eslint-disable-next-line react/no-unstable-nested-components
        DropdownIndicator: ({ isFocused }: any) => (
          <DropdownIndicator isFocused={isFocused} />
        ),
      }}
      value={selectedOption}
      options={options}
      styles={customStyles}
      classNamePrefix={styles.select}
      onChange={handleChange}
      onBlur={onBlur}
    />
  );
};

export default Select;
