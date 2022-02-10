import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './InvoiceToolbar.module.css';
import StatusLabel from '../../../../invoices/components/StatusLabel/StatusLabel';
import useInvoiceDetailsStore from '../../../hooks/useInvoiceDetailsStore';
import Paper from '../../../../../app/components/Paper/Paper';
import DeleteInvoiceButton from '../../DeleteInvoiceButton/DeleteInvoiceButton';
import ChangeInvoiceStatusButton from '../../ChangeInvoiceStatusButton/ChangeInvoiceStatusButton';
import Button, { COLOR } from '../../../../../app/components/Button/Button';

type InvoiceToolbarProps = {

};

const InvoiceToolbar: React.FC<InvoiceToolbarProps> = () => {
  const { invoice, setEditModalOpened } = useInvoiceDetailsStore();

  if (!invoice) {
    return null;
  }

  return (
    <Paper>
      <aside className={styles.toolbar}>
        <div className={styles.statusContainer}>
          <span className={styles.statusLabel}>Status</span>
          <StatusLabel className={styles.status} status={invoice.status} />
        </div>
        <div className={styles.controls}>
          <Button
            color={COLOR.faint}
            onClick={() => setEditModalOpened(true)}
          >
            Edit
          </Button>
          <DeleteInvoiceButton />
          <ChangeInvoiceStatusButton />
        </div>
      </aside>
    </Paper>
  );
};

export default observer(InvoiceToolbar);
