import styled from 'styled-components';

export const StyledNewToDoForm = styled.section`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;

    .x_icon {
        position: absolute;
        right: 0;
        margin: 5px;
        border: white;
        border-radius: 45%;
        background-color: white;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            background: none;
            border: none;
            cursor: pointer;
        }
    }

    section {
        position: relative;
        top: 30vh;
        background-color: RGB(0, 64, 166);
        border-radius: 5px;
        width: 100%;
        width: -webkit-fill-available;
        width: -moz-available;
        height: 275px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 0px 15px;
        margin: 0px 75px;
        color: white;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        width: -webkit-fill-available;
        width: -moz-available;

        textarea {
            overflow-y: hidden;
            resize: none;
        }

        input:focus {
            outline: none;
        }

        .input_title {
            background: none;
            border: none;
            padding: 0;
            width: inherit;
            color: white;
            font-weight: bold;
        }

        .input_description {
            background: none;
            border: none;
            padding: 0;
            width: inherit;
            color: white;
        }
    }

    .title,
    .input_title {
        font-size: 20px;
        margin: 20px 10px;
    }
    .description,
    .input_description {
        font-size: 15px;
        margin: 0px 10px 20px 10px;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        section {
            margin: 0px 30px;
        }
    }

    h1 {
        font-size: 30px;
        margin: 0;
    }
    p {
        font-size: 15px;
        margin: 0;
    }
    button {
        width: 140px;
        height: 40px;
        border: none;
        border-radius: 5px;
        margin: 10px 0px;
        cursor: pointer;
    }
    .modal-transition-appear {
  transition: transform 300ms;
  transform: translateY(-100%);
}

.modal-transition-appear-active {
  transform: translateY(0);
}

`;
