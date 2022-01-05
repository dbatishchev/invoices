import { Invoice } from '../types/Invoice';
import { Status } from '../types/Status';

let cache: Invoice[] | null = null;

const InvoiceAPI = {
  async fetchInvoices(): Promise<Invoice[]> {
    if (cache !== null) {
      return Promise.resolve(cache);
    }

    return fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then((res) => res.json())
      .then((results: any) => results.map((r: any) => ({
        ...r,
        createdAt: new Date(r.createdAt),
        paymentDue: new Date(r.paymentDue),
      })))
      .then((results) => {
        cache = results;

        return results;
      });
  },

  async fetchInvoice(id: string): Promise<Invoice | null> {
    const invoices = await this.fetchInvoices();

    const result = invoices.find((inv) => inv.id === id);
    if (!result) {
      return null;
    }

    return result;
  },

  async moveStatus(invoice: Invoice, status: Status) {
    return Promise.resolve(status);
  },

  async save(invoice: Invoice) {
    const existed = Boolean(cache?.find((inv) => inv.id === invoice.id));
    if (!existed) {
      cache?.push(invoice);
    }

    return Promise.resolve(invoice);
  },

  async delete(invoice: Invoice) {
    cache = cache?.filter((inv) => inv.id !== invoice.id) as Invoice[];

    return Promise.resolve(true);
  },
};

export default InvoiceAPI;
