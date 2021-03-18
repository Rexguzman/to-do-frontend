import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { newUserToDo } from '../../actions';

import { CSSTransition } from 'react-transition-group';
import { StyledNewToDoForm } from './NewToDoForm.styled';

const NewToDoForm = props => {
    const { open, user, newUserToDo } = props;

    //-----------> Form logic
    const [form, setValues] = useState({
        userId: user.id,
        title: '',
        description: '',
        completed: false,
    });

    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        newUserToDo(form);
        setValues({
            userId: user.id,
            title: '', 
            description: '',
            completed: false,
        });
        open.handleClick();
    };

    return open.isOpen
        ? ReactDOM.createPortal(
              <StyledNewToDoForm>
                  <CSSTransition
                      appear
                      in
                      timeout={300}
                      classNames="modal-transition"
                      unmountOnExit
                  >
                      <section>
                          <figure className="x_icon">
                              <button onClick={() => open.handleClick()}>
                                  X
                              </button>
                          </figure>
                          <h1>Nueva Nota</h1>
                          <form onSubmit={handleSubmit}>
                              <input
                                  className="input_title"
                                  name="title"
                                  type="text"
                                  placeholder="Titulo"
                                  onChange={handleInput}
                                  autoComplete="off"
                                  required
                              />
                              <textarea
                                  rows="4"
                                  className="input_description"
                                  name="description"
                                  type="text"
                                  role="textbox"
                                  aria-multiline="true"
                                  placeholder="Descripción"
                                  onChange={handleInput}
                                  required
                              />
                              <button>Agregar</button>
                          </form>
                      </section>
                  </CSSTransition>
              </StyledNewToDoForm>,
              document.getElementById('modal')
          )
        : null;
};

NewToDoForm.propTypes = {
    open: PropTypes.object,
    user: PropTypes.object,
    newUserToDo: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = {
    newUserToDo,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);
