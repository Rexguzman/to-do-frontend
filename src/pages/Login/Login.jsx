import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { loginUser, deleteError, googleLogin } from '../../actions';

import { Link } from 'react-router-dom';
import { StyledLogin } from './Login.styled';
import { StyledContainer } from '../../style/global';

import { DeleteAlert, Loading } from '../../components';

const Login = (props) => {

    const { error, loginUser, deleteError, googleLogin } = props;

    //-----------> Form logic
    
    const [form, setValues] = useState({
        email: '',
    });
    
    const handleInput = (event) => {
        setValues({
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
            loginUser(form, '/#/profile');
        }
    };

    //-----------> Email error

    const [emailError, setEmailError] = useState(false);
    
    useEffect(() => {
        document
            .getElementById('email_input')
            .addEventListener('keydown', function (event) {
                if (event.key == 'Backspace' && !form.email.includes('@')) {
                    setEmailError(true);
                }
            });
            if (form.email.includes('@')) {
                setEmailError(false);
            }
    }, [form.email]);

    //-----------> Redux Errors
    
    const [isError, setIsError] = useState(false);
    
    const handleAcceptError = () => {
        setIsError(false);
        deleteError();
    };

    useEffect(() => {
        if (error || emailError) {
            setIsLoading(false);
            setIsError(true);
        }
    }, [error]);
    
    //-----------> Loading State
    
    const [isLoading, setIsLoading] = useState(false);

    //-----------> Google logic

    const handleGoogleLogin = (event) =>{
        event.preventDefault()
        googleLogin('/#/profile')
    }

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
                <StyledLogin emailError={emailError}>
                    <h1>BIENVENIDO</h1>
                    <form onSubmit={handleSubmit} className="login_form">
                        <input
                            id="email_input"
                            className="email_input"
                            name="email"
                            type="text"
                            placeholder="Correo"
                            onChange={handleInput}
                            required
                        />
                        {emailError ? <span>Correo invalido</span> : null}
                        <input
                            name="password"
                            type="password"
                            placeholder="Contraseña"
                            onChange={handleInput}
                            required
                        />
                        <button className="form_button" type="submit">
                            Iniciar Sesión
                        </button>
                    </form>
                    <form onSubmit={handleGoogleLogin} className="google_auth">
                        <figure>
                            <img
                                src="https://img.icons8.com/color/452/google-logo.png"
                                alt="Google icon"
                            />
                        </figure>
                        <button className="google_button" type="submit">
                            Continuar con Google
                        </button>
                    </form>
                    <p>¿Has olvidado la contraseña?</p>
                    <hr />
                    <Link to="/register">
                        <button className="register_button">Regístrate</button>
                    </Link>
                </StyledLogin>
            </StyledContainer>
        </React.Fragment>
    );
};


Login.propTypes = {
    error: PropTypes.bool,
    loginUser: PropTypes.func,
    deleteError: PropTypes.func,
    googleLogin: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        error: state.error,
    };
};

const mapDispatchToProps = {
    loginUser,
    deleteError,
    googleLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
