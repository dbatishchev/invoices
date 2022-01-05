import React from 'react';
import styles from './Separator.module.css';

type SeparatorProps = {
  vertical?: boolean
};

const Separator: React.FC<SeparatorProps> = ({ vertical = false }) => (
  <hr className={`${styles.separator} ${vertical ? styles.separatorVertical : ''}`} />
);

export default Separator;
