import React from 'react';
import {
  FieldArray,
} from 'formik';
import FormFieldSet from '../../../../../app/components/FormFieldSet/FormFieldSet';
import { ReactComponent as Plus } from '../../../../../app/icons/plus.svg';
import styles from './ItemsFieldSet.module.css';
import { ReactComponent as Delete } from '../../../../../app/icons/delete.svg';
import { InvoiceItem } from '../../../types/InvoiceItem';
import FormFieldFormik from '../../../../../app/components/FormFieldFormik/FormFieldFormik';
import FormField from '../../../../../app/components/FormField/FormField';
import Input from '../../../../../app/components/Input/Input';
import Button, { COLOR } from '../../../../../app/components/Button/Button';

type ItemsFieldSetProps = {
  items: InvoiceItem[],
};

const ItemsFieldSet: React.FC<ItemsFieldSetProps> = ({ items }) => (
  <FormFieldSet legend="Items" boldLegend>
    <FieldArray name="items">
      {({
        remove, push,
      }) => (
        <>
          <div className={styles.itemsList}>
            {items.map((item, index) => {
              const total = item.quantity * item.price;

              return (
                // eslint-disable-next-line react/no-array-index-key
                <div className={styles.item} key={index}>
                  <div className={styles.itemName}>
                    <FormFieldFormik
                      id={`items-${index}-name`}
                      name={`items.${index}.name`}
                      label="Item Name"
                    />
                  </div>
                  <div className={styles.itemQuantity}>
                    <FormFieldFormik
                      id={`items-${index}-quantity`}
                      name={`items.${index}.quantity`}
                      label="Qty."
                    />
                  </div>
                  <div className={styles.itemPrice}>
                    <FormFieldFormik
                      id={`items-${index}-price`}
                      name={`items.${index}.price`}
                      label="Price"
                    />
                  </div>
                  <div className={styles.itemTotal}>
                    <FormField
                      id={`items-${index}-total`}
                      label="Total"
                    >
                      <Input
                        id={`items-${index}-total`}
                        value={total}
                        readonly
                      />
                    </FormField>
                  </div>
                  <div className={styles.itemDelete}>
                    <button
                      type="button"
                      className={styles.deleteBtn}
                      disabled={items.length <= 1}
                      onClick={() => {
                        if (items.length > 1) {
                          remove(index);
                        }
                      }}
                    >
                      <Delete />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <Button
            color={COLOR.faint}
            type="button"
            onClick={() => push({
              name: '',
              quantity: 1,
              price: 100,
              total: 100,
            })}
          >
            <Plus />
            {' '}
            Add New Item
          </Button>
        </>
      )}
    </FieldArray>
  </FormFieldSet>
);

export default ItemsFieldSet;
