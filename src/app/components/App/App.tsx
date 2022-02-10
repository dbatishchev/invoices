import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import InvoicesListPage from '../../../features/invoices/pages/InvoicesListPage/InvoicesListPage';
import InvoiceDetailsPage from '../../../features/details/pages/InvoiceDetailsPage/InvoiceDetailsPage';

type AppProps = {

};

const App: React.FC<AppProps> = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<InvoicesListPage />} />
      <Route path="/invoice/:id" element={<InvoiceDetailsPage />} />
    </Routes>
  </Layout>
);

export default App;
