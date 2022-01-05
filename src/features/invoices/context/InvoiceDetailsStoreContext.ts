import React from 'react';
import InvoiceDetailsStore from '../stores/InvoiceDetailsStore';

export default React.createContext<InvoiceDetailsStore>({} as InvoiceDetailsStore);
