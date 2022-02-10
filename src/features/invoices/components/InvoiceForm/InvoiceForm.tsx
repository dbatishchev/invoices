import React, { useRef } from 'react';
import {
  Formik, Form, FormikHelpers,
} from 'formik';
import * as Yup from 'yup';
import Scrollbars from 'react-custom-scrollbars-2';
import styles from './InvoiceForm.module.css';
import AddressFieldSet from './AddressFieldSet/AddressFieldSet';
import FormFieldSet from '../../../../app/components/FormFieldSet/FormFieldSet';
import BillDescriptionFieldSet from './BillDescriptionFieldSet/BillDescriptionFieldSet';
import ItemsFieldSet from './ItemsFieldSet/ItemsFieldSet';
import { Address } from '../../types/Address';
import { InvoiceItem } from '../../types/InvoiceItem';
import { PaymentTerm } from '../../types/PaymentTerms';
import { Invoice } from '../../types/Invoice';
import FormFieldFormik from '../../../../app/components/FormFieldFormik/FormFieldFormik';
import Button from '../../../../app/components/Button/Button';

type InvoiceFormValues = Invoice & {
  clientName: string,
  clientEmail: string,
  senderAddress: Address,
  clientAddress: Address,
  items: InvoiceItem[],
  paymentDue: Date,
  paymentTerms: PaymentTerm,
  description: string,
};

const AddressValidationSchema = Yup.object().shape({
  street: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  postCode: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
});

const ItemValidationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  quantity: Yup.number().typeError('Must be a number').required('Required'),
  price: Yup.number().typeError('Must be a number').required('Required'),
});

const InvoiceValidationSchema = Yup.object().shape({
  senderAddress: AddressValidationSchema,
  clientAddress: AddressValidationSchema,
  clientName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  clientEmail: Yup.string().email('Invalid email').required('Required'),
  description: Yup.string().required('Required'),
  items: Yup.array().of(
    ItemValidationSchema,
  ),
  paymentTerms: Yup.number().oneOf([1, 7, 14, 30]).required('Required'),
  paymentDue: Yup.date().required('Required'),
});

type InvoiceFormProps = {
  initialValues: Invoice,
  onCancel: () => void,
  onSave: (invoice: Invoice) => void,
  title: React.ReactNode,
};

const InvoiceForm: React.FC<InvoiceFormProps> = ({
  onCancel, onSave, initialValues, title,
}) => {
  const footerRef = useRef<HTMLElement>(null);
  const handleScroll = ({ top }: { top: number }) => {
    if (!footerRef.current) {
      return;
    }

    // https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
    footerRef.current.style.setProperty('--shadow-offset', `${top * 100}%`);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={InvoiceValidationSchema}
      onSubmit={async (
        values: InvoiceFormValues,
        { setSubmitting }: FormikHelpers<InvoiceFormValues>,
      ) => {
        onSave(values);
        setSubmitting(false);
        onCancel();
      }}
    >
      {({ values }) => (
        <Form className={styles.form}>
          <Scrollbars
            style={{
              width: '100%',
              height: 'calc(100% - 110px)',
            }}
            autoHide
            autoHideTimeout={1000}
            onScrollFrame={handleScroll}
          >
            <div className={styles.title}>
              {title}
            </div>
            <div className={styles.container}>
              <AddressFieldSet
                legend="Bill From"
                name="senderAddress"
              />
              <FormFieldSet legend="Bill To">
                <FormFieldFormik id="client-name" name="clientName" label="Client's Name" />
                <FormFieldFormik id="client-email" name="clientEmail" label="Client’s Email" />
                <AddressFieldSet name="clientAddress" />
              </FormFieldSet>
              <BillDescriptionFieldSet />
              <ItemsFieldSet items={values.items} />
            </div>
          </Scrollbars>

          <footer
            ref={footerRef}
            className={styles.footer}
          >
            <Button onClick={onCancel}>Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </footer>
        </Form>
      )}
    </Formik>
  );
};

export default InvoiceForm;
