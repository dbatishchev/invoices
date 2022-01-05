import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import InvoicesListStoreProvider from '../../providers/InvoicesListStoreProvider';
import InvoicesListStore from '../../stores/InvoicesListStore';
import InvoicesList from '../../components/InvoicesList/InvoicesList';
import { Status } from '../../types/Status';

type InvoicesListPageProps = {

};

const InvoicesListPage: React.FC<InvoicesListPageProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const invoicesListStore = useMemo(() => new InvoicesListStore(), []);
  const filtersFromQueryString = useMemo(() => searchParams.getAll('filter') as Status[], [searchParams]);

  useEffect(() => {
    invoicesListStore.fetch();
  }, []);

  useEffect(() => {
    invoicesListStore.setStatusFilter(filtersFromQueryString);
  }, [filtersFromQueryString.length]);

  useEffect(() => {
    if (JSON.stringify(filtersFromQueryString) === JSON.stringify(invoicesListStore.statusFilter)) {
      return;
    }
    setSearchParams({ filter: invoicesListStore.statusFilter });
  }, [invoicesListStore.statusFilter.length]);

  return (
    <InvoicesListStoreProvider store={invoicesListStore}>
      <InvoicesList />
    </InvoicesListStoreProvider>
  );
};

export default observer(InvoicesListPage);
