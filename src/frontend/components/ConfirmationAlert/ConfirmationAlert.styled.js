import styled from 'styled-components';

export const StyledConfirmationAlert = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;

    .x_icon {
        position: absolute;
        right: 0;
        margin: 5px;
        border: white;
        border-radius: 45%;
        background-color: white;
        width:25px;
        height:25px;
        display:flex;
        align-items:center;
        justify-content:center;
        

        button {
            background: none;
            border: none;
            cursor:pointer;
        }
    }

    svg {
        width:50px;
        height:50px
    }

    figure {
        margin: 12px 20px;
    }

    section {
    position: relative;
    top:30vh;
    background-color: #720000;
    border-radius: 5px;
    width: auto;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    margin: 0px 20px;
    color:white;
    text-align:center;

    @media (max-width: ${({ theme }) => theme.tablet}) {
        
    }

        h1 {
            font-size:30px;
            margin:0;
        }
        p {
            font-size:15px;
            margin:0;
        }
        button{
            width:100%;
            height: 40px;
            border: none;
            border-radius: 5px;
            margin: 10px 0px;
            box-shadow:0 10px 16px 0 rgba(0,0,0,0.1),0 6px 20px 0 rgba(0,0,0,0.1);
            cursor: pointer;
        }
    }

`