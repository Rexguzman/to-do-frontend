import React from 'react';
import { StyledPlusIcon } from './PlusIcon.styled';

const PlusIcon = () =>{
    return(
        <StyledPlusIcon>
            <svg viewBox="3 3 16 16">
                <circle cx="11" cy="-1041.36" r="8" transform="matrix(1 0 0-1 0-1030.36)" fill="RGB(0, 64, 166)"/>
                <path d="m351.27 312.97h-29.983c-.022 14.366 0 52.16 0 52.16 0 0-32.529 0-48.621.043v29.962c16.09-.022 48.621-.022 48.621-.022 0 0 0 37.749-.022 52.18h29.983c.022-14.431.022-52.18.022-52.18 0 0 32.507 0 48.599 0v-29.983c-16.09 0-48.599 0-48.599 0 0 0-.043-37.791 0-52.16" fill="#fff" transform="matrix(.05956 0 0 .05956-9.03-11.652)"/>
            </svg>
        </StyledPlusIcon>
    )
}

export default PlusIcon;