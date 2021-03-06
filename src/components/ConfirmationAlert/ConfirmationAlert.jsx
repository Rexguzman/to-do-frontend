import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { StyledConfirmationAlert } from './ConfirmationAlert.styled';
import {CSSTransition} from 'react-transition-group'

const ConfirmationAlert = props => {
    const { _id, open, handlerDeleteNote } = props;
    return open.isOpen
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
                        <figure className="x_icon">
                            <button onClick={() => open.handleClick()}>X</button>
                        </figure>
                        <figure>
                            <svg
                                fill="currentColor"
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 497 497"
                            >
                                <path
                                    d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8ZM375.6,183q-.94,16.68-1.94,33.36c-.61,6.61-1.16,13.23-1.21,19.88-.72,6.61-1.15,13.24-1.22,19.89A191.12,191.12,0,0,0,370,276c-.82,6.63-1.06,13.29-1.31,19.95q-.66,10.21-1.33,20.43-.61,10-1.25,19.91l-1.2,19.87c-.61,6.62-1.11,13.25-1.2,19.9-1,6.28-.39,12.73-2.07,18.94a47,47,0,0,1-5.56,10.39c-4.91,5.06-10.48,9-17.62,10.15a41.3,41.3,0,0,1-6.39.38q-76.08,0-152.15,0a52.82,52.82,0,0,1-8.71-.67A37.17,37.17,0,0,1,156,405.37a56.45,56.45,0,0,1-5.29-9.41c-2-6.49-1.35-13.29-2.33-19.89-.1-6.65-.6-13.27-1.21-19.88q-.6-10-1.21-19.91l-1.23-19.87c-.06-.59-.11-1.18-.17-1.77q-.58-9.36-1.16-18.71c-.28-6.63-.51-13.26-1.31-19.86a198.18,198.18,0,0,0-1.27-19.92c-.06-6.65-.5-13.27-1.22-19.88-.1-6.66-.6-13.28-1.22-19.9-.27-5-.57-10.05-.81-15.07-.41-8.42-1.38-16.8-1.38-25.23L156,176H356l19.81.1v0l0,0h0C375.77,178.4,375.74,180.71,375.6,183Zm19.65-32.74c-1.47,2.87-4,4.47-6.88,5.61l-12.45.33H136.09l-12.5-.18a13.83,13.83,0,0,1-7.33-6.59q-.12-6.62-.26-13.23c.51-4.67-.5-9.41.68-14,1.19-2.6,3.42-4.15,5.68-5.68,4.53-.9,9.14-.23,13.7-.63a150.62,150.62,0,0,0,19.93,0h19.85a155.93,155.93,0,0,0,19.93,0c5.15.4,5.15.4,7.44-4.21,1-2,2-4,3-6,3.09-6.45,8.11-9.62,15.34-9.56,13,.1,25.92,0,38.88,0,11.78.08,23.58-.38,35.36.36A18.12,18.12,0,0,1,306.41,107c.79,1.88,1.82,3.64,2.73,5.46,2.11,4.24,2.1,4.24,7.13,3.48l19.85,0a155.93,155.93,0,0,0,19.93,0H375.9c4.6.78,9.31-.37,13.9.79a12.81,12.81,0,0,1,5.95,6.43q.12,6.58.25,13.17C395.51,140.91,396.51,145.66,395.25,150.28Z"
                                    transform="translate(-7.5 -7.5)"
                                />
                            </svg>
                        </figure>
                        <h1>Eliminar Nota</h1>
                        <p>¿Estas seguro que quieres eliminar esta nota?</p>
                        <p>no podras recuperarla</p>
                        <button onClick={() => handlerDeleteNote(_id)}>
                            Eliminar
                        </button>
                    </section>
                    </CSSTransition>
              </StyledConfirmationAlert>,
              document.getElementById('modal')
          )
        : null;
};

ConfirmationAlert.propTypes = {
    _id: PropTypes.string,
    open: PropTypes.object,
    handlerDeleteNote: PropTypes.func,
}

export default ConfirmationAlert;
