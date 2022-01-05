import React from 'react';
import styles from './StatusLabel.module.css';
import { Status } from '../../types/Status';

type StatusProps = {
  status: Status,
  className?: string
};

const STATUS_CLASSNAME = {
  paid: styles.paid,
  pending: styles.pending,
  draft: styles.draft,
};

const StatusLabel: React.FC<StatusProps> = ({ status, className = '' }) => (
  <span className={`${styles.status} ${STATUS_CLASSNAME[status]} ${className}`}>{status}</span>
);

export default StatusLabel;
