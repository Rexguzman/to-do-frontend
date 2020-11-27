import styled from 'styled-components';

export const StyledNavBarContainer = styled.section`
    background-color:${({ theme }) => theme.secundary};
    width: ${({ isShown }) => isShown ? '275px' : '90px' };
    height:100vh;
    transition: width 0.3s ease-in-out;
    position:fixed;

    a {
    display:flex;
    align-items:center;
    color: white;
    text-decoration: none;
    margin:0;
    color: inherit;
    width: -webkit-fill-available;
    }

    h3{
        display: ${({ isShown }) => isShown ? 'block' : 'none' };
        margin:0px 5px;
    }

    .name {
        font-size:10px;
    }

    @media (max-width: 1150px) {
        width:90px;
        width: ${({ open }) => open ? '275px' : '60px' };

        h3 {
            display:${({ open }) => open ? 'block' : 'none' };
            font-size:15px;
        }
    }

    .select_item{
        background-color: ${({ theme }) => theme.primary};
        border-radius: 35px;
    }
`

export const StyledElement = styled.section`
    display:flex;
    align-items: center;

    svg {
        width:50px;
        height:50px
    }

    figure {
        margin: 12px 20px;
    }

    @media (max-width: 1150px) {
        svg {
        width:30px;
        height:30px
    }

        figure {
            margin: 12px 15px;
        }
    }

`
