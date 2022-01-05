import React from 'react';
import confirm from '../../../../app/util/confirm';
import useInvoiceDetailsStore from '../../hooks/useInvoiceDetailsStore';
import nextInvoiceStatus from '../../util/nextInvoiceStatus';
import capitalizeFirstLetter from '../../../../app/util/capitalizeFirstLetter';
import Button, { COLOR } from '../../../../app/components/Button/Button';

type ChangeInvoiceStatusButtonProps = {

};

const ChangeInvoiceStatusButton: React.FC<ChangeInvoiceStatusButtonProps> = () => {
  const { invoice, moveStatus } = useInvoiceDetailsStore();
  const nextStatus = nextInvoiceStatus(invoice!);

  const handleClick = () => {
    confirm({
      title: 'Confirm Changing Status',
      buttonColor: COLOR.primary,
      buttonContent: 'Change Status',
      renderContent: () => (
        <>
          Are you sure you want to change status of invoice #
          {/* {invoice.id} */}
          ? This action cannot be undone.
        </>
      ),
    })
      .then(async () => {
        await moveStatus();
      });
  };

  if (!nextStatus) {
    return null;
  }

  return (
    <Button
      onClick={handleClick}
    >
      Mark as
      {' '}
      {capitalizeFirstLetter(nextStatus)}
    </Button>
  );
};

export default ChangeInvoiceStatusButton;
