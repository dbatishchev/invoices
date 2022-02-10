import {
  action,
  flow, makeObservable, observable, runInAction,
} from 'mobx';
import InvoiceAPI from '../../invoices/api/InvoiceAPI';
import { Invoice } from '../../invoices/types/Invoice';
import { Status } from '../../invoices/types/Status';
import nextInvoiceStatus from '../util/nextInvoiceStatus';

class InvoiceDetailsStore {
  invoice: Invoice | null = null;

  isLoading = false;

  isEditModalOpened = false;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      invoice: observable,
      isEditModalOpened: observable,
      setEditModalOpened: action,
      deleteInvoice: action,
      saveInvoice: action,
      fetch: flow,
    });
  }

  * fetch(id: string) {
    this.isLoading = true;
    this.invoice = yield InvoiceAPI.fetchInvoice(id);
    this.isLoading = false;
  }

  moveStatus = async () => {
    if (!this.invoice) {
      return;
    }

    const newStatus = nextInvoiceStatus(this.invoice);

    if (!newStatus) {
      return;
    }

    await InvoiceAPI.moveStatus(this.invoice!, newStatus);

    runInAction(() => {
      this.invoice!.status = newStatus as Status;
    });
  };

  deleteInvoice = async () => {
    await InvoiceAPI.delete(this.invoice!);
  };

  saveInvoice = async (invoice: Invoice) => {
    await InvoiceAPI.save(invoice);
    runInAction(() => {
      this.invoice = invoice;
    });
  };

  setEditModalOpened = (isEditModalOpened: boolean) => {
    this.isEditModalOpened = isEditModalOpened;
  };
}

export default InvoiceDetailsStore;
