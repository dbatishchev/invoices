import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';
import styles from './Modal.module.css';
import Button, { COLOR } from '../Button/Button';

type ModalProps = {
  children: React.ReactNode,
  title: string,
  active: boolean,
  onClose: () => void,
  renderControls?: () => React.ReactNode,
};

const Modal: React.FC<ModalProps> = ({
  children, title = '', active, onClose, renderControls,
}) => {
  useEffect(() => {
    if (active) {
      document.body.style.position = 'fixed';
    }

    return () => {
      document.body.style.position = 'static';
    };
  }, [active]);

  if (!active) {
    return null;
  }

  return createPortal(
    <FocusTrap>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={styles.overlay}
          onClick={onClose}
          onKeyPress={onClose}
          role="button"
          tabIndex={0}
          aria-label="Close"
        />
        <div className={styles.body}>
          <div className={styles.title}>{title}</div>
          <div className={styles.content}>
            {children}
          </div>
          <div className={styles.controls}>
            <Button color={COLOR.faint} onClick={onClose}>Close</Button>
            {renderControls && renderControls()}
          </div>
        </div>
      </div>
    </FocusTrap>,
    document.body,
  );
};

export default Modal;
