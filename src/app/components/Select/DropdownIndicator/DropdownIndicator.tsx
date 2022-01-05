import React from 'react';
import styles from './DropdownIndicator.module.css';
import { ReactComponent as ArrowDown } from '../../../icons/arrow-down.svg';

type DropdownIndicatorProps = {
  isFocused?: boolean
};

const DropdownIndicator: React.FC<DropdownIndicatorProps> = ({ isFocused = false }) => (
  <div className={`${styles.indicator} ${isFocused ? styles.isFocused : ''}`}>
    <ArrowDown />
  </div>
);

export default DropdownIndicator;
