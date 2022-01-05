import React from 'react';
import styles from './InvoiceItemsTable.module.css';
import { InvoiceItem } from '../../../../types/InvoiceItem';

type InvoiceItemsTableProps = {
  items: InvoiceItem[]
};

const InvoiceItemsTable: React.FC<InvoiceItemsTableProps> = ({ items }) => (
  <div className={styles.tableContainer}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.tableHeader}>Item Name</th>
          <th className={styles.tableHeader}>QTY.</th>
          <th className={styles.tableHeader}>Price</th>
          <th className={styles.tableHeader}>Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.name}>
            <th className={styles.tableCellName}>{item.name}</th>
            <td className={styles.tableCellQuantity}>{item.quantity}</td>
            <td className={styles.tableCellPrice}>{item.price}</td>
            <td className={styles.tableCellTotal}>{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default InvoiceItemsTable;
