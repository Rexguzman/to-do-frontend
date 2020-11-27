import styled from 'styled-components';

export const StyledPlusIcon = styled.section`
    width: 60px;
    height: 60px;
    position: fixed;
    bottom: 35px;
    right: 35px;
    padding: 0;
    background-color: unset;
    border: none;
    outline-color: transparent;
    border-radius: 50%;
    box-shadow:0 0px 50px 10px rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.5);


    @media (max-width: 1150px) {
        width: 50px;
        height: 50px;
        bottom: 25px;
        right: 25px;
    }
`