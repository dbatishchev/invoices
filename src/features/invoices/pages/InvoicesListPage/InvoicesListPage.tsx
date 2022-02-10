import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import InvoicesListStoreProvider from '../../providers/InvoicesListStoreProvider';
import InvoicesListStore from '../../stores/InvoicesListStore';
import InvoicesList from '../../components/InvoicesList/InvoicesList';
import { Status } from '../../types/Status';
import arraysEqual from '../../util/arraysEqual';

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
  }, [filtersFromQueryString]);

  useEffect(() => {
    if (arraysEqual(filtersFromQueryString, invoicesListStore.statusFilter)) {
      return;
    }
    setSearchParams({ filter: invoicesListStore.statusFilter });
  }, [filtersFromQueryString, invoicesListStore.statusFilter]);

  return (
    <InvoicesListStoreProvider store={invoicesListStore}>
      <InvoicesList />
    </InvoicesListStoreProvider>
  );
};

export default observer(InvoicesListPage);
