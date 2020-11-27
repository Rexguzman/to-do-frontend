import React, {useState} from 'react';
import { connect } from 'react-redux';

import { registerRequest } from '../../actions';

import { Link } from 'react-router-dom';
import { StyledRegister } from './Register.styled';
import { StyledContainer } from '../../style/global';

const Login = props => {

    const [form, setValue] = useState({
        email: '',
        name: '',
        password:'',
    });

    const handleInput = event => {
        setValue({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.registerRequest(form);
        props.history.push('/');
    }

    return(
    <React.Fragment>
        <StyledContainer>
            <StyledRegister>
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
                        name="email"
                        type="text" 
                        placeholder="Correo"
                        required
                        onChange={handleInput}             
                        />
                    <input
                        name="password"
                        type="password" 
                        placeholder="Contraseña"
                        required
                        onChange={handleInput}           
                        />
                    <input
                        name="confirm-password"
                        type="password" 
                        placeholder="Confirmar Contraseña"
                        required
                        onChange={handleInput}           
                        />
                    <button className="form_button">Registarse</button>
                </form>
                <Link to="/login">¿Ya tienes cuenta??</Link>
            </StyledRegister>
        </StyledContainer>
    </React.Fragment>
    )
}

const mapDispatchToProps = {
    registerRequest,
}

export default connect(null, mapDispatchToProps)(Login);