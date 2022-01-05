import React from 'react';
import { useNavigate } from 'react-router-dom';
import confirm from '../../../../app/util/confirm';
import useInvoiceDetailsStore from '../../hooks/useInvoiceDetailsStore';
import Button, { COLOR } from '../../../../app/components/Button/Button';

type DeleteInvoiceButtonProps = {

};

const DeleteInvoiceButton: React.FC<DeleteInvoiceButtonProps> = () => {
  const { deleteInvoice } = useInvoiceDetailsStore();
  const navigate = useNavigate();

  const handleClick = () => {
    confirm({
      title: 'Confirm Deletion',
      buttonColor: COLOR.warning,
      buttonContent: 'Delete',
      renderContent: () => (
        <>
          Are you sure you want to delete invoice #
          {/* {invoice.id} */}
          ? This action cannot be undone.
        </>
      ),
    })
      .then(async () => {
        await deleteInvoice();
        navigate('/');
      });
  };

  return (
    <Button
      color={COLOR.warning}
      onClick={handleClick}
    >
      Delete
    </Button>
  );
};

export default DeleteInvoiceButton;
