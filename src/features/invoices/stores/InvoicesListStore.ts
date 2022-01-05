import {
  action, computed, makeObservable, observable, runInAction,
} from 'mobx';
import InvoiceAPI from '../api/InvoiceAPI';
import { Invoice } from '../types/Invoice';
import { Status } from '../types/Status';
import makeInvoice from '../util/makeInvoice';

class InvoicesListStore {
  invoices: Invoice[] | null = null;

  isLoading = false;

  editedInvoice: Invoice | null = null;

  statusFilter: Status[] = [];

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      invoices: observable,
      statusFilter: observable,
      editedInvoice: observable,
      filteredInvoices: computed,
      createNewInvoice: action,
      cancelEdit: action,
      setStatusFilter: action,
      fetch: action,
      saveInvoice: action,
    });
  }

  get filteredInvoices() : Invoice[] | null {
    if (!this.invoices) {
      return null;
    }

    if (this.statusFilter.length === 0) {
      return this.invoices;
    }

    return this.invoices.filter((i) => this.statusFilter.includes(i.status));
  }

  createNewInvoice = () => {
    this.editedInvoice = makeInvoice();
  };

  cancelEdit = () => {
    this.editedInvoice = null;
  };

  fetch = async () => {
    this.isLoading = true;
    const invoices = await InvoiceAPI.fetchInvoices();

    runInAction(() => {
      this.invoices = invoices;
      this.isLoading = false;
    });
  };

  saveInvoice = async (invoice: Invoice) => {
    await InvoiceAPI.save(invoice);

    runInAction(() => {
      this.invoices?.push(invoice);
    });
  };

  setStatusFilter = (status: Status[]) => {
    if (status.join(',') === this.statusFilter.join(',')) {
      return;
    }
    this.statusFilter = status;
  };
}

export default InvoicesListStore;
