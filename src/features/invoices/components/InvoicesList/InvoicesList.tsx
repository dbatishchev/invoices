import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './InvoicesList.module.css';
import useInvoicesListStore from '../../hooks/useInvoicesListStore';
import InvoicesListItem from './InvoicesListItem/InvoicesListItem';
import SideSheet from '../../../../app/components/SideSheet/SideSheet';
import InvoiceForm from '../InvoiceForm/InvoiceForm';
import StatusFilter from '../StatusFilter/StatusFilter';
import makeInvoice from '../../util/makeInvoice';
import EmptyPlaceholder from '../EmptyPlaceholder/EmptyPlaceholder';
import { ReactComponent as Plus } from '../../../../app/icons/plus.svg';
import useMediaQuery from '../../../../app/hooks/useMediaQuery';
import Button from '../../../../app/components/Button/Button';

type InvoicesListProps = {

};

const InvoicesList: React.FC<InvoicesListProps> = () => {
  const {
    filteredInvoices, editedInvoice, createNewInvoice, cancelEdit, saveInvoice,
  } = useInvoicesListStore();
  const isMobile = useMediaQuery('(max-width: 1024px)');

  if (!filteredInvoices) {
    return null;
  }

  let countLabel = '';
  if (isMobile) {
    countLabel = filteredInvoices.length > 0 ? `${filteredInvoices.length} invoices` : 'No invoices';
  } else {
    countLabel = filteredInvoices.length > 0 ? `There are ${filteredInvoices.length} total invoices` : 'There are no invoices';
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Invoices</h1>
          <div className={styles.count}>
            {countLabel}
          </div>
        </div>
        <div className={styles.controls}>
          <StatusFilter />
          <Button onClick={createNewInvoice} icon={<Plus />}>
            New
            {' '}
            <span className="hide-on-small">Invoice</span>
          </Button>
        </div>
      </header>
      {filteredInvoices.length > 0 ? (
        <ul className={styles.invoices}>
          {filteredInvoices.map((invoice) => (
            <li key={invoice.id}>
              <InvoicesListItem invoice={invoice} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyPlaceholder />
      )}
      <SideSheet
        opened={Boolean(editedInvoice)}
        onClose={cancelEdit}
      >
        <InvoiceForm
          title="New Invoice"
          onCancel={cancelEdit}
          onSave={saveInvoice}
          initialValues={makeInvoice()}
        />
      </SideSheet>
    </div>
  );
};

export default observer(InvoicesList);
