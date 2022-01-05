import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './InvoicesListItem.module.css';
import { Invoice } from '../../../types/Invoice';
import StatusLabel from '../../StatusLabel/StatusLabel';
import { ReactComponent as ArrowRight } from '../../../../../app/icons/arrow-right.svg';
import useMediaQuery from '../../../../../app/hooks/useMediaQuery';
import FormattedDate from '../../../../../app/components/FormattedDate/FormattedDate';

type InvoicesListItemProps = {
  invoice: Invoice,
};

const InvoicesListItem: React.FC<InvoicesListItemProps> = ({ invoice }) => {
  const linkEl = useRef<HTMLAnchorElement>(null);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const handleCardClick = () => {
    if (!isMobile || !linkEl.current) {
      return;
    }

    linkEl.current.click();
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <article className={styles.invoice} onClick={handleCardClick}>
      <div className={styles.id}>
        #
        <strong>
          {invoice.id}
          {' '}
        </strong>
      </div>
      <div className={styles.paymentDue}>
        Due
        {' '}
        <FormattedDate date={invoice.paymentDue} />
      </div>
      <div className={styles.clientName}>{invoice.clientName}</div>
      <div className={styles.total}>
        <span className={styles.currency}>£</span>
        {invoice.total}
      </div>
      <div className={styles.status}>
        <StatusLabel status={invoice.status} className={styles.statusLabel} />
      </div>
      <Link
        className={styles.link}
        to={`/invoice/${invoice.id}`}
        ref={linkEl}
      >
        <ArrowRight />
      </Link>
    </article>
  );
};

export default InvoicesListItem;
