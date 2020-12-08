import styled from 'styled-components';

export const StyledToggleButton = styled.section`
    position: absolute;
    right: 10px;
    top: 10px;

    circle {
        fill: white;
        transition: transform 0.4s;
        transform: ${({ theme }) => theme.transform};
    }
    path {
        stroke: ${({ theme }) => theme.font};
        stroke-width: 20;
    }
    button {
        background-color: transparent;
        border: none;
        outline: none;
        margin: 0px 15px 0px 0px;
        cursor: pointer;
    }
`;
