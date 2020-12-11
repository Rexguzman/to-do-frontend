import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { newToDo } from '../../actions';

import { StyledNewToDoForm } from './NewToDoForm.styled';

const NewToDoForm = (props) => {
    const { open } = props;

    const [form, setValues] = useState({
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
        props.newToDo(form);
        setValues({ title: '', description: '', completed: false });
        open.handleClick();
    };

    if (!open.isOpen) {
        return null;
    } else {
        return ReactDOM.createPortal(
            <StyledNewToDoForm>
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
            </StyledNewToDoForm>,
            document.getElementById('modal')
        );
    }
};

const mapDispatchToProps = {
    newToDo,
};

export default connect(null, mapDispatchToProps)(NewToDoForm);
