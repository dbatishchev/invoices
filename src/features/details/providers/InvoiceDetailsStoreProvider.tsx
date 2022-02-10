import React from 'react';
import InvoiceDetailsStoreContext from '../context/InvoiceDetailsStoreContext';
import InvoiceDetailsStore from '../stores/InvoiceDetailsStore';

type ProviderProps = {
  children: React.ReactNode,
  store: InvoiceDetailsStore,
};

const InvoiceDetailsStoreProvider = ({ children, store }: ProviderProps) => (
  <InvoiceDetailsStoreContext.Provider value={store}>
    {children}
  </InvoiceDetailsStoreContext.Provider>
);

export default InvoiceDetailsStoreProvider;
