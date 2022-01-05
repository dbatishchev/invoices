import { Status } from '../types/Status';
import { Invoice } from '../types/Invoice';

export default function nextInvoiceStatus(invoice: Invoice) {
  let newStatus:Status | null = null;

  if (invoice.status === 'draft') {
    newStatus = 'pending';
  } else if (invoice.status === 'pending') {
    newStatus = 'paid';
  }

  return newStatus;
}
