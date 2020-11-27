import styled from 'styled-components';

export const StyledSearchBar = styled.section`
    width:inherit;
    margin: 50px 0px;

    input:focus {
    outline: none;

    }

    input {
    background: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.font};
    width:inherit;
    color: ${({ theme }) => theme.font};
    font-size:20px;
    }
    
`