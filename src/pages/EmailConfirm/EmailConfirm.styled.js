import styled from 'styled-components'

export const StyledConfirmEmailContainer = styled.section`
    display:flex;
    flex-direction:column;
    width: 500px;
    height:240px;
    justify-content:center;
    align-items:center;
    background-color:${({ theme }) => theme.secundary};
    margin:100px 30px;
    border-radius:15px;
    box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.2);

    a {
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: center;
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
        background-color: #0016A8;
        color:${({ theme }) => theme.font};
    }
`