import styled from 'styled-components';

export const StyledNavBarContainer = styled.section`
    background-color: ${({ theme }) => theme.secundary};
    width: ${({ isShown }) => (isShown ? '275px' : '90px')};
    height: 100vh;
    transition: width 0.3s ease-in-out;
    position: fixed;
    z-index: 1;
    padding: 5px 0px;

    a {
        display: flex;
        align-items: center;
        color: white;
        text-decoration: none;
        margin: 0;
        color: inherit;
        width: -webkit-fill-available;
    }

    a:hover {
        background-color: RGB(0, 0, 0, 0.4);
        border-radius: 35px;
        transition: all 0.2s linear;
    }

    h3 {
        display: ${({ isShown }) => (isShown ? 'block' : 'none')};
        margin: 0px 5px;
    }

    .user_name {
        font-size: 10px;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        width: 90px;
        width: ${({ open }) => (open ? '275px' : '60px')};

        h3 {
            display: ${({ open }) => (open ? 'block' : 'none')};
            font-size: 15px;
        }
    }

    .select_item {
        background-color: ${({ theme }) => theme.primary};
        border-radius: 35px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 275px;
        height: 100vh;
        transition: width 0.3s ease-in-out;
        position: fixed;
        transform: ${({ open }) =>
            open ? 'translateX(0)' : 'translateX(-280px)'};
        transition: all 0.3s ease-in-out;

        h3 {
            display: block;
        }
    }
`;

export const StyledElement = styled.section`
    display: flex;
    align-items: center;

    svg {
        width: 50px;
        height: 50px;
    }

    figure {
        margin: 12px 20px;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        svg {
            width: 30px;
            height: 30px;
        }

        figure {
            margin: 12px 15px;
        }
    }
`;

export const StyledBurgerButton = styled.figure`
    display: none;
    width: 30px;
    height: 30px;
    position: fixed;
    top: 0;
    padding: 0;
    background-color: unset;
    border: none;
    outline-color: transparent;
    border-radius: 50%;
    transform: translateX(265px);
    z-index: 0;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: ${({ open }) => (open ? 'none' : 'block')};
    }
`;
