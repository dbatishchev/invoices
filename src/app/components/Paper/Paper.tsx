import React from 'react';
import styles from './Paper.module.css';

type PaperProps = {
  children: React.ReactNode,
};

const Paper: React.FC<PaperProps> = ({ children }) => (
  <div className={styles.paper}>
    {children}
  </div>
);

export default Paper;
