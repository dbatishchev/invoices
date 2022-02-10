import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import InvoiceDetailsStore from '../../stores/InvoiceDetailsStore';
import InvoiceDetailsStoreProvider from '../../providers/InvoiceDetailsStoreProvider';
import InvoiceDetails from '../../components/InvoiceDetails/InvoiceDetails';

type InvoiceDetailsPageProps = {

};

const InvoiceDetailsPage: React.FC<InvoiceDetailsPageProps> = () => {
  const { id } = useParams();

  const invoiceDetailsStore = useMemo(() => new InvoiceDetailsStore(), []);

  useEffect(() => {
    if (!id) {
      return;
    }

    invoiceDetailsStore.fetch(id);
  }, [id]);

  return (
    <InvoiceDetailsStoreProvider store={invoiceDetailsStore}>
      <InvoiceDetails />
    </InvoiceDetailsStoreProvider>
  );
};

export default observer(InvoiceDetailsPage);
