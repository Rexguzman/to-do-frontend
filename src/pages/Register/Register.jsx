import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { registerUser, deleteError } from '../../actions';

import { Link } from 'react-router-dom';
import { StyledRegister } from './Register.styled';
import { StyledContainer } from '../../style/global';

import { DeleteAlert, Loading } from '../../components';

const Register = (props) => {
    const { error } = props;

    const [form, setValue] = useState({
        email: '',
        name: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (event) => {
        setValue({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        if (emailError) {
            event.preventDefault();
        } else {
            setIsLoading(true);
            event.preventDefault();
            props.registerUser(form, '/#/login');
        }
    };

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (error) {
            setIsLoading(false);
            setIsError(true);
        }
    }, [error]);

    const handleAcceptError = () => {
        setIsError(false);
        props.deleteError();
    };

    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
        document
            .getElementById('email_input')
            .addEventListener('keydown', function (event) {
                if (event.key == 'Backspace' && event.key == 'Delete' && !form.email.includes('@')) {
                    setEmailError(true);
                }
            });
        if (form.email.includes('@')) {
            setEmailError(false);
        }
    }, [form.email]);

    return (
        <React.Fragment>
            {isLoading ? <Loading /> : null}
            {isError ? (
                <DeleteAlert
                    isError={isError}
                    handleAcceptError={handleAcceptError}
                />
            ) : null}
            <StyledContainer>
                <StyledRegister emailError={emailError}>
                    <h1>REGISTRO</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Nombre"
                            required
                            onChange={handleInput}
                        />
                        <input
                            id="email_input"
                            className="email_input"
                            name="email"
                            type="text"
                            placeholder="Correo"
                            required
                            onChange={handleInput}
                        />
                        {emailError ? <span>Correo invalido</span> : null}
                        <input
                            name="password"
                            type="password"
                            placeholder="Contraseña"
                            required
                            onChange={handleInput}
                        />
                        <button className="form_button" type="submit">
                            Registarse
                        </button>
                    </form>
                    <Link to="/login"><h4>¿Ya tienes cuenta?</h4></Link>
                </StyledRegister>
            </StyledContainer>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        error: state.error,
    };
};

const mapDispatchToProps = {
    registerUser,
    deleteError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);