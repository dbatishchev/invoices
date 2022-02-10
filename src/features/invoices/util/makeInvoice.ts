import { Invoice } from '../types/Invoice';

const generateRandomID = () => Math.floor(1000 + Math.random() * 9000);

export default function makeInvoice(): Invoice {
  return {
    id: `RG${generateRandomID()}`,
    createdAt: new Date(),
    paymentDue: new Date(),
    description: '',
    paymentTerms: 1,
    clientName: '',
    clientEmail: '',
    status: 'draft',
    senderAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    clientAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    items: [{
      name: '',
      quantity: 1,
      price: 100,
      total: 100,
    }],
    total: 0,
  };
}
