import React from 'react';
import styles from './Container.module.css';

type ContainerProps = {
  children: React.ReactNode,
};

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default Container;
