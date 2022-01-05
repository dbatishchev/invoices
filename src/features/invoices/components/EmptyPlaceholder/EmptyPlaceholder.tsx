import React from 'react';
import illustration from './illustration-empty.svg';
import styles from './EmptyPlaceholder.module.css';

type EmptyPlaceholderProps = {

};

const EmptyPlaceholder: React.FC<EmptyPlaceholderProps> = () => (
  <div className={styles.placeholder}>
    <img
      src={illustration}
      alt=""
      className={styles.img}
    />
    <h1 className={styles.title}>
      There is nothing here
    </h1>
    <div className={styles.description}>
      Create an invoice by clicking the
      {' '}
      <strong>New Invoice</strong>
      {' '}
      button and get started
    </div>
  </div>
);

export default EmptyPlaceholder;
