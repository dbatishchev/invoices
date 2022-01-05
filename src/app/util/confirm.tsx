import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../components/Modal/Modal';
import Button, { COLOR } from '../components/Button/Button';

type ConfirmationSettings = {
  title: string,
  buttonColor: COLOR,
  buttonContent: React.ReactNode,
  renderContent: () => React.ReactNode,
};

export default function confirm({
  title, buttonColor, buttonContent, renderContent,
}: ConfirmationSettings): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const root = document.body.appendChild(document.createElement('div'));

    const unmountModal = () => {
      ReactDOM.unmountComponentAtNode(root);
      if (root.parentNode) {
        root.parentNode.removeChild(root);
      }
    };

    const handleClose = () => {
      reject();
      unmountModal();
    };

    const handleApproveClick = () => {
      resolve(true);
      unmountModal();
    };

    const modal = (
      <Modal
        onClose={handleClose}
        active
        title={title}
        renderControls={() => (
          <Button
            color={buttonColor}
            onClick={handleApproveClick}
          >
            {buttonContent}
          </Button>
        )}
      >
        {renderContent()}
      </Modal>
    );

    ReactDOM.render(
      modal,
      root,
    );
  });
}
