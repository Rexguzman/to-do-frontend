import styled from 'styled-components';

export const StyledError404Container = styled.section`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height: 100vh;

    button {
        background: ${({ theme }) => theme.secundary};
        border: 1px solid ${({ theme }) => theme.secundary};
        border-radius: 25px;
        width: 250px;
        color: ${({ theme }) => theme.font};
        font-size: 20px;
        height: 45px;
        padding: 0 45px;
        text-justify: center;
        margin: 20px 10px;
        cursor: pointer;
    }

    button:hover {
        background-color: RGB(0, 64, 166, 0.4);
        border: solid RGB(0, 84, 219);
        transition: all 0.2s linear;
    }

    .info_container{
        display: flex;
        justify-content:center;
        align-items:center;
    }

    p, h1 {
        margin: 5px 10px;
    }

    figure {
        margin: 10px;
        width: 70px;
    }
`