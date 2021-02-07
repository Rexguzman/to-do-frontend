import React, {useEffect, useState} from 'react'
import axios from 'axios';

import { StyledContainer } from '../../style/global'
import { StyledConfirmEmailContainer } from './EmailConfirm.styled'

import { Link, useParams } from 'react-router-dom';
import { Loading } from '../../components';



const EmailConfirm = () => {
    const [status, setStatus] = useState('loading');
    const {id} = useParams();

    useEffect(()=>{
        axios({
            url: `https://to-do-api.rexguzman.vercel.app/email/verify/confirm/${id}`,
            method: "get",
        }).then((response)=> {
            if(response.status == 200){
                setStatus('ok')
            }
        }).catch((error) => {
            if(error){
                setStatus('error')
            }
        })
    }, [])

    

    if(status == 'loading'){
        return(
            <Loading/>
        )
    }else if (status == 'error'){
        return (
            <StyledContainer>
                <StyledConfirmEmailContainer>
                    <h1>Ups hubo un error</h1>
                    <p>Algo salio mal</p>
                    <Link to="/#/"><button>Iniciar Sesión</button></Link>
                </StyledConfirmEmailContainer>
            </StyledContainer>
        )
    }else if('ok'){
        return(
            <StyledContainer>
                <StyledConfirmEmailContainer>
                    <h1>¡Muchas Gracias!</h1>
                    <p>Hemos confirmado extitosamente tu email</p>
                    <Link to="/#/"><button>Iniciar Sesión</button></Link>
                </StyledConfirmEmailContainer>
            </StyledContainer>
        )
    }
}

export default EmailConfirm;