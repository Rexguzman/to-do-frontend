import styled from 'styled-components';

export const StyledProfileContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .user_pic_container {
        display: block;
        margin: 65px 0;
        width: 200px;

        .user_pic {
            width: inherit;
            height: inherit;
        }
    }

    .profile_item_container {
        display: flex;
        width: 420px;
        justify-content: space-between;
        align-items: center;
    }

    .user_info {
        margin: 5px 25px;
        background-color: blue;
        border-radius: 25px;
        width: 300px;
        background-color: ${({ theme }) => theme.secundary};
        padding: 0 25px;
        overflow-wrap: break-word;
    }

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

    .profile_buttons_container {
        display: flex;
    }

    svg {
        width: 25px;
        height: 25px;
    }

    figure {
        position: absolute;
        margin: 30px 20px;
        z-index: 0;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        margin-left: 20px;

        .profile_buttons_container {
            display: inline-block;
            width: 100%;
            width: -webkit-fill-available;
            width: -moz-available;

            button {
                width: 100%;
                width: -webkit-fill-available;
                width: -moz-available;
                width: -moz-available;
                margin: 5px 0;
            }
        }
        figure {
            margin: 15px 10px;
        }

        .profile_item_container {
            display: contents;
            width: 100%;
            width: -webkit-fill-available;
            width: -moz-available;

            .profile_value {
                width: inherit;
                margin: 0 25px;
            }
            .user_info {
                margin: 20px 0;
                width: 100%;
                width: -webkit-fill-available;
                width: -moz-available;
            }
        }
    }
`;

export const StyledItemContainer = styled.section`
    margin-left: 20px;
    width: 100%;
    width: -webkit-fill-available;
    width: -moz-available;
    margin-right: 20px;

    @media (max-width: ${({ theme }) => theme.tablet}) {
        margin-left: 60px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-left: 0;
    }
`;
