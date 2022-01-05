import React from 'react';
import styles from './FullAddress.module.css';
import { Address } from '../../types/Address';

type FullAddressProps = {
  address: Address,
  className?: string,
};

const FullAddress: React.FC<FullAddressProps> = ({ address, className = '' }) => (
  <div className={`${styles.fullAddress} ${className}`}>
    <div>{address.street}</div>
    <div>{address.city}</div>
    <div>{address.postCode}</div>
    <div>{address.country}</div>
  </div>
);

export default FullAddress;
