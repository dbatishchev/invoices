import React from 'react';
import InvoicesListStore from '../stores/InvoicesListStore';

export default React.createContext<InvoicesListStore>({} as InvoicesListStore);
