import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './InvoiceItems.module.css';
import useInvoiceDetailsStore from '../../../hooks/useInvoiceDetailsStore';
import InvoiceItemsTable from './InvoiceItemsTable/InvoiceItemsTable';
import useMediaQuery from '../../../../../app/hooks/useMediaQuery';
import InvoiceItemsList from './InvoiceItemsList/InvoiceItemsList';

type InvoiceItemsProps = {

};

const InvoiceItems: React.FC<InvoiceItemsProps> = () => {
  const { invoice } = useInvoiceDetailsStore();
  const isMobile = useMediaQuery('(max-width: 1024px)');

  if (!invoice || !invoice.items || invoice.items.length === 0) {
    return null;
  }

  return (
    <div>
      {isMobile ? (
        <InvoiceItemsList items={invoice.items} />
      ) : <InvoiceItemsTable items={invoice.items} />}
      <footer className={styles.footer}>
        <div className={styles.footerLabel}>Amount Due</div>
        <div className={styles.footerTotal}>£ 556.00</div>
      </footer>
    </div>
  );
};

export default observer(InvoiceItems);
