import styled from 'styled-components';

export const StyledToDoItem = styled.section`
    display: flex;
    flex-direction:column;
    background-color: ${({ theme }) => theme.secundary};
    background-color: ${ ({completed}) => completed ? "RGB(0, 255, 123, 0.4)" : "none"} ;
    border: ${ ({completed}) => completed ? "solid RGB(38, 255, 0, 219)" : "solid transparent"};
    border-radius:30px;
    margin: 10px 0px;
    transition: all 0.25s linear;

    button {
        border:0;
        padding:0;
        background:none;
    }

    button:focus{
        outline:none;
    }

    form {
    display: flex;
    flex-direction: column;
    }

    .active-edit-item{
        background-color: RGB(0,64,166, 0.4);
        border: solid RGB(0, 84, 219);
        border-radius:30px;
        transition: all 0.5s ease-in;
    }
    
    textarea {
        overflow-y: hidden;
        resize: none;
    }

    input:focus {
    outline: none;
    }

    .input_title{
        background: none;
        border: none;
        padding: 0;
        width:inherit;
        color: ${({ theme }) => theme.font};
        font-weight: bold;
    }

    .input_description {
        background: none;
        border: none;
        padding: 0;
        width:inherit;
        color: ${({ theme }) => theme.font};
    }
    

    .title, .input_title{
        font-size:20px;
        margin: 20px 10px;
    }
    .description, .input_description{
        font-size:15px;
        margin: 0px 10px 20px 10px;
    }

    .check_icon{
        display: flex;
        align-items: center;
    }
    .options_icon{
        display: flex;
        align-items: center;

        figure {
        cursor:pointer;

        }
    }

    .icons_container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .to-do-item_text {
        width: 100%;
        width: -webkit-fill-available;
        width: -moz-available;
    }

    svg {
        width:50px;
        height:50px
    }

    figure {
        margin: 12px 20px;
        cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        svg {
        width:30px;
        height:30px
    }

        figure {
            margin: 12px 15px;
        }
    }

`