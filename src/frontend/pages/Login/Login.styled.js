import styled from 'styled-components';

export const StyledLogin = styled.section`
    display:flex;
    flex-direction:column;
    width: 500px;
    height:500px;
    justify-content:center;
    align-items:center;
    background-color:${({ theme }) => theme.secundary};
    margin:100px 30px;
    border-radius:15px;
    box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.2);

    a {
    color: white;
    text-decoration: none;
    }

    h1 {
        font-size:40px;
        margin:20px 0px;
    }

    button {
        width:80%;
        height: 40px;
        border: none;
        border-radius: 5px;
        margin: 10px 0px;
        box-shadow:0 10px 16px 0 rgba(0,0,0,0.1),0 6px 20px 0 rgba(0,0,0,0.1);
        cursor: pointer;
    }

    .google_button{
        width:100%;
        background-color:${({ theme }) => theme.primary};
        color:${({ theme }) => theme.font};
    }

    .register_button{
        color:white;
        background-color:#38B600;
    }



    .form_button{
        width:100%;
        background-color:#0016A8;
        color:white;
    }

    form {
        display:flex;
        flex-direction:column;
        width:80%
    }

    input {
        height:40px;
        border: none;
        border-radius: 5px;
        margin: 10px 0px;
        padding-left:15px;
        background-color:${({ theme }) => theme.primary};
        color:${({ theme }) => theme.font};
        box-shadow:0 10px 16px 0 rgba(0,0,0,0.1),0 6px 20px 0 rgba(0,0,0,0.1);

    }

    section {
        display:flex;
        width: 80%;

        figure {

            margin:0;
            display:flex;
            align-items:center;

            img {
                height:30px;
                position: absolute;
                margin-left:15px;
            }
        }
    }

    hr {
        color:white;
        width:80%;
    }
`