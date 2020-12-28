import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { loginUser, deleteError } from '../../actions';

import { Link } from 'react-router-dom';
import { StyledLogin } from './Login.styled';
import { StyledContainer } from '../../style/global';

import { DeleteAlert, Loading } from '../../components';

const Login = (props) => {
    const { error } = props;

    const [form, setValues] = useState({
        email: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        setIsLoading(true);
        event.preventDefault();
        props.loginUser(form, '/#/profile');
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
                <StyledLogin>
                    <h1>BIENVENIDO</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            name="email"
                            type="text"
                            placeholder="Correo"
                            onChange={handleInput}
                            required
                        />
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
                    <section>
                        <figure>
                            <img
                                src="https://img.icons8.com/color/452/google-logo.png"
                                alt="Google icon"
                            />
                        </figure>
                        <button className="google_button">
                            Continuar con Google
                        </button>
                    </section>
                    <p>¿Has olvidado la contraseña?</p>
                    <hr />
                    <Link to="/register">
                    <button className="register_button">
                        Regístrate
                    </button>
                    </Link>
                </StyledLogin>
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
    loginUser,
    deleteError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
