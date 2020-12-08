import React, {useState} from 'react';
import {connect} from 'react-redux';

import { loginRequest } from '../../actions';

import { Link } from 'react-router-dom';
import { StyledLogin } from './Login.styled';
import { StyledContainer } from '../../style/global';

const Login = props => {

    const [form, setValues] = useState({
        email:'',
    })

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }

    return(
    <React.Fragment>
        <StyledContainer>
            <StyledLogin>
                <h1>BIENVENIDO</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        name="email"
                        type="text" 
                        placeholder="Correo"
                        onChange={handleInput}             
                        />
                    <input
                        name="password"
                        type="password" 
                        placeholder="Contraseña"
                        onChange={handleInput}            
                        />
                    <button className="form_button">Iniciar Sesión</button>
                </form>
                <section>
                        <figure>
                            <img src="https://img.icons8.com/color/452/google-logo.png" alt="Google icon"/>
                        </figure>
                        <button className="google_button">Continuar con Google</button>
                </section>
                <p>¿Has olvidado la contraseña?</p>
                <hr/>
                <button className="register_button"><Link to="/register">Regístrate</Link></button>
            </StyledLogin>
        </StyledContainer>
    </React.Fragment>
    )
}

const mapDispatchToProps = {
    loginRequest,
}

export default connect(null, mapDispatchToProps )(Login);