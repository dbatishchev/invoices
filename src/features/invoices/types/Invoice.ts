import { Address } from './Address';
import { InvoiceItem } from './InvoiceItem';
import { Status } from './Status';
import { PaymentTerm } from './PaymentTerms';

export type Invoice = {
  id: string,
  createdAt: Date,
  paymentDue: Date,
  description: string,
  paymentTerms: PaymentTerm,
  clientName: string,
  clientEmail: string,
  status: Status,
  senderAddress: Address,
  clientAddress: Address,
  items: InvoiceItem[],
  total: number
};
