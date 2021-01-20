import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { StyledConfirmationAlert } from './DeleteAlert.styled';
import { CSSTransition } from 'react-transition-group';

const DeleteAlert = (props) => {
    const { isError, handleAcceptError } = props;

    return isError
        ? ReactDOM.createPortal(
              <StyledConfirmationAlert>
                  <CSSTransition
                      appear
                      in
                      timeout={300}
                      classNames="modal-transition"
                      unmountOnExit
                  >
                      <section>
                          <figure>
                              <svg
                                  fill="currentColor"
                                  id="Layer_1"
                                  data-name="Layer 1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 497 497"
                              >
                                  <path d="M248,0C111,0,0,111,0,248S111,496,248,496,496,385,496,248,385,0,248,0ZM387.94,96.19l11.84-11.84a8.37,8.37,0,0,1,11.84,11.84L399.78,108a8.37,8.37,0,0,1-11.84-11.84ZM340.71,84.35a8.35,8.35,0,0,1,11.84,0l11.84,11.84A8.37,8.37,0,1,1,352.55,108L340.71,96.19A8.37,8.37,0,0,1,340.71,84.35Zm18,101.69a16.65,16.65,0,0,1,0,23.62l-12.12,12.11a144.87,144.87,0,1,1-72.44-72.37l12.12-12.12a16.66,16.66,0,0,1,23.61,0l18.46,18.46,36.22-36.22,11.91,11.84-36.22,36.22Zm25.77-91.25a8.36,8.36,0,1,1-16.71,0V78.08a8.36,8.36,0,1,1,16.71,0Zm27.1,60.6a8.35,8.35,0,0,1-11.84,0l-11.84-11.84a8.37,8.37,0,0,1,11.84-11.84l11.84,11.84A8.37,8.37,0,0,1,411.62,155.39ZM418,128.23H401.24a8.36,8.36,0,0,1,0-16.72H418a8.36,8.36,0,1,1,0,16.72Z" />
                                  <path d="M192.28,192.31a67,67,0,0,0-66.87,66.87,11.15,11.15,0,0,0,22.29,0,44.62,44.62,0,0,1,44.58-44.58,11.15,11.15,0,0,0,0-22.29Z" />
                              </svg>
                          </figure>
                          <h1>Error</h1>
                          <p>Los datos suministrados no son correctos,</p>
                          <p>verifica tus datos y vuelve a intentar</p>
                          <button onClick={handleAcceptError}>Aceptar</button>
                      </section>
                  </CSSTransition>
              </StyledConfirmationAlert>,
              document.getElementById('modal')
          )
        : null;
};

DeleteAlert.propTypes = {
    isError: PropTypes.bool,
    handleAcceptError: PropTypes.func,
}

export default DeleteAlert;
