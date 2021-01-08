import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { newToDoUser } from '../../actions';

import {CSSTransition} from 'react-transition-group'
import { StyledNewToDoForm } from './NewToDoForm.styled';

const NewToDoForm = (props) => {
    const { open, user } = props;

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
        props.newToDoUser(form);
        setValues({ title: '', description: '', completed: false });
        open.handleClick();
    };

    return (open.isOpen
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
                            <button onClick={() => open.handleClick()}>X</button>
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
                                />
                            <button>Agregar</button>
                        </form>
                    </section>
                </CSSTransition>
              </StyledNewToDoForm>,
              document.getElementById('modal')
          )
        : null);
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    newToDoUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);
