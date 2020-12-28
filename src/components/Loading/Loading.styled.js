import styled from 'styled-components';

export const StyledLoadingContainer = styled.div`

    display: flex;
    position: fixed;
    z-index:1;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
    }
    .lds-dual-ring:after {
        content: ' ';
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
