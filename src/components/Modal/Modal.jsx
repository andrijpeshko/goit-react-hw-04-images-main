import {useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalWindow, ModalImg } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ url, onClose }){
   useEffect(() => {
     const handleEscClose = e => {
       if (e.code !== 'Escape') {
         return;
       }
       onClose();
     };

     window.addEventListener('keydown', handleEscClose);

     return () => {
       window.removeEventListener('keydown', handleEscClose);
     };
   }, [onClose]);

    return createPortal(
      <ModalOverlay>
        <ModalWindow>
          <ModalImg src={url} alt="img" onClick={onClose} />
        </ModalWindow>
      </ModalOverlay>,
      modalRoot
    );
  }


Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};