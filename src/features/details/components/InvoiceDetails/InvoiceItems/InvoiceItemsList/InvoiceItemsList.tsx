import React from 'react';
import styles from './InvoiceItemsList.module.css';
import { InvoiceItem } from '../../../../../invoices/types/InvoiceItem';

type InvoiceItemsListProps = {
  items: InvoiceItem[]
};

const InvoiceItemsList: React.FC<InvoiceItemsListProps> = ({ items }) => (
  <div className={styles.tableContainer}>
    {items.map((item) => (
      <div key={item.name}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.quantity}>{item.quantity}</div>
        <div className={styles.price}>{item.price}</div>
        <div className={styles.total}>{item.total}</div>
      </div>
    ))}
  </div>
);

export default InvoiceItemsList;
