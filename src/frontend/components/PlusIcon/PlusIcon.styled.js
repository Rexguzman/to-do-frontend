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
    cursor: pointer;


    @media (max-width: ${({ theme }) => theme.tablet}) {
        width: 50px;
        height: 50px;
        bottom: 25px;
        right: 25px;
    }
`