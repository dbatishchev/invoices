import React from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { useNavigate } from 'react-router-dom';
import styles from './InvoiceDetails.module.css';
import Paper from '../../../../app/components/Paper/Paper';
import InvoiceItems from './InvoiceItems/InvoiceItems';
import InvoiceToolbar from './InvoiceToolbar/InvoiceToolbar';
import FullAddress from '../FullAddress/FullAddress';
import useInvoiceDetailsStore from '../../hooks/useInvoiceDetailsStore';
import SideSheet from '../../../../app/components/SideSheet/SideSheet';
import InvoiceForm from '../InvoiceForm/InvoiceForm';
import { ReactComponent as ArrowLeft } from '../../../../app/icons/arrow-left.svg';
import FormattedDate from '../../../../app/components/FormattedDate/FormattedDate';

type InvoiceDetailsProps = {

};

const InvoiceDetails: React.FC<InvoiceDetailsProps> = () => {
  const {
    invoice, isEditModalOpened, setEditModalOpened, saveInvoice,
  } = useInvoiceDetailsStore();
  const closeModal = () => setEditModalOpened(false);
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  if (!invoice) {
    return null;
  }

  return (
    <div className={styles.invoiceDetails}>
      <nav className={styles.nav}>
        <button
          className={styles.goBackBtn}
          onClick={handleBackClick}
        >
          <ArrowLeft />
          <span>Go Back</span>
        </button>
      </nav>
      <InvoiceToolbar />
      <Paper>
        <header className={styles.header}>
          <div className={styles.title}>
            <h1>
              #
              <strong>{invoice.id}</strong>
            </h1>
            <div className={styles.category}>
              {invoice.description}
            </div>
          </div>
          <FullAddress className={styles.senderAddress} address={invoice.senderAddress} />
        </header>
        <div className={styles.details}>
          <div className={`${styles.detailsItem} ${styles.detailsItemDates}`}>
            <div>
              <div className={styles.detailsItemLabel}>Invoice Date</div>
              <div className={styles.detailsItemValue}>
                <FormattedDate date={invoice.createdAt} />
              </div>
            </div>
            <div>
              <div className={styles.detailsItemLabel}>Payment Due</div>
              <div className={styles.detailsItemValue}>
                <FormattedDate date={invoice.paymentDue} />
              </div>
            </div>
          </div>
          <div className={`${styles.detailsItem} ${styles.detailsItemBillTo}`}>
            <div className={styles.detailsItemLabel}>Bill To</div>
            <div className={styles.detailsItemValue}>
              {invoice.clientName}
              <FullAddress className={styles.clientAddress} address={invoice.clientAddress} />
            </div>
          </div>
          <div className={styles.detailsItem}>
            <div className={styles.detailsItemLabel}>Sent to</div>
            <div className={styles.detailsItemValue}>{invoice.clientEmail}</div>
          </div>
        </div>
        <InvoiceItems />
      </Paper>
      <SideSheet
        opened={isEditModalOpened}
        onClose={closeModal}
      >
        <InvoiceForm
          title={`Edit #${invoice.id}`}
          onCancel={closeModal}
          onSave={saveInvoice}
          initialValues={toJS(invoice)}
        />
      </SideSheet>
    </div>
  );
};

export default observer(InvoiceDetails);
