import React from 'react';
import InvoicesListStoreContext from '../context/InvoicesListStoreContext';
import InvoicesListStore from '../stores/InvoicesListStore';

type ProviderProps = {
  children: React.ReactNode,
  store: InvoicesListStore,
};

const InvoicesListStoreProvider = ({ children, store }: ProviderProps) => (
  <InvoicesListStoreContext.Provider value={store}>
    {children}
  </InvoicesListStoreContext.Provider>
);

export default InvoicesListStoreProvider;
