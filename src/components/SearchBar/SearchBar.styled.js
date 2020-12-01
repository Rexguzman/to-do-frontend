import styled from 'styled-components';

export const StyledSearchBar = styled.section`
    width: inherit;
    margin: 65px 0px 30px 0px;

    svg {
        width: 25px;
        height: 25px;
    }

    figure {
        position: absolute;
        margin: 10px 10px;
        z-index: 0;
    }

    input:focus {
        outline: none;
    }

    input {
        background: ${({ theme }) => theme.secundary};
        border: 1px solid ${({ theme }) => theme.secundary};
        border-radius: 25px;
        width: inherit;
        color: ${({ theme }) => theme.font};
        font-size: 20px;
        height: 45px;
        padding: 0 45px;
    }
    input:focus {
        background-color: RGB(0, 64, 166, 0.4);
        border: solid RGB(0, 84, 219);
    }
`;
