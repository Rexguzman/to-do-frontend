import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { StyledElement, StyledNavBarContainer } from './NavBar.styled';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const NavBar = ({ toDos, economy }) => {
    const [isShown, setIsShown] = useState(false);
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <StyledNavBarContainer
            isShown={isShown}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            open={open}
            ref={node}
        >
            <StyledElement onClick={() => setOpen(!open)}>
                <figure>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-circle"
                        role="img"
                        viewBox="0 0 496 512"
                    >
                        <path
                            fill="currentColor"
                            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                        />
                    </svg>
                </figure>
                <div>
                    <h3>Bienvenido</h3>
                    <h3 className="name">Rex Guzmán</h3>
                </div>
            </StyledElement>
            <StyledElement className={toDos}>
                <Link to="/">
                    <figure>
                        <svg viewBox="0 0 493.45 493.45">
                            <path
                                fill="currentColor"
                                d="M256,9.28C119.74,9.28,9.28,119.74,9.28,256S119.74,502.72,256,502.72,502.72,392.26,502.72,256,392.26,9.28,256,9.28ZM398.31,323.36l-.61,2.41c-.36.71-.72,1.41-1.06,2.12-1.87,4-5.79,6.2-8.23,9.68q-5.27,5.25-10.51,10.51l-9.72,9.71L357.66,368.3A80.23,80.23,0,0,0,348,378l-10.5,10.52c-1,.85-2,1.65-2.88,2.54-2.68,2.64-5.21,5.46-8.93,6.69a38.68,38.68,0,0,1-8.39.57c0-5.09-.07-10.17-.14-15.26,0-1.06-.18-2.13-.27-3.19a1.56,1.56,0,0,0-.06-1.82V357.88a121.41,121.41,0,0,0,0-20.27l0-20.18.48-.48,20.18-.05a120.35,120.35,0,0,0,20.27,0h20.18c6.76.67,13.52.32,20.28.18l.29,1.51C398.44,320.18,398.37,321.77,398.31,323.36Zm.19-45.22c-.05,5.12-.28,10.24-.08,15.35.1,2.73-.85,3.28-3.36,3.22-5.7-.13-11.41.05-17.11.11H357.76c-6.76-.26-13.51-.27-20.27,0l-20.17,0c-15.5-2-22.48,8.53-20.4,20.63q0,10.09,0,20.19a120.59,120.59,0,0,0,0,20.29q0,10.1,0,20.2a1.82,1.82,0,0,0-.07,1.79c-.63,5.19-.27,10.41-.22,15.61,0,2.4-.76,3-3,2.93-5.21-.11-10.42.05-15.64.1l-.6,0c-7.13-.26-14.26-.24-21.39,0q-10.14-.39-20.26,0h-20.2l-1.79,0q-8.64-.36-17.26,0l-1.79,0H174.51c-6.75-.28-13.5-.27-20.25,0-7.13-.22-14.26-.24-21.39,0l-.61,0-4.76-.11-2.22-.15c-5-1.88-8.92-4.92-11-10-1.1-3.32-.2-6.83-1-10.17V357.89a122.74,122.74,0,0,0,0-20.29V317.44a131.13,131.13,0,0,0,0-20.88V276.37a119.07,119.07,0,0,0,0-20.25q0-10.1,0-20.2a1.53,1.53,0,0,0,.07-1.78,108.5,108.5,0,0,0-.07-18.47V194.88a109.54,109.54,0,0,0,.07-18.47,1.83,1.83,0,0,0-.08-1.76q0-10.12,0-20.25a1.84,1.84,0,0,0,.07-1.75,109.66,109.66,0,0,0-.07-18.48c.21-3.58.18-7.18,1.07-10.7a20.36,20.36,0,0,1,9-8.94,47.49,47.49,0,0,1,10.7-1,119.07,119.07,0,0,0,20.25,0l20.2,0a1.92,1.92,0,0,0,1.8.19c6.16.12,12.32.52,18.46-.2h20.8c6.14.71,12.3.32,18.45.2a1.92,1.92,0,0,0,1.8-.19H256a121.17,121.17,0,0,0,20.25,0h20.2a129.59,129.59,0,0,0,20.85,0h20.2a120.23,120.23,0,0,0,20.26,0H378c3.34.82,6.85-.11,10.16,1A16.91,16.91,0,0,1,397.7,124c.2.81.41,1.62.61,2.42l.19,6a1.92,1.92,0,0,0,.19,1.8v20.2a120.12,120.12,0,0,0,0,20.25v20.2a1.92,1.92,0,0,0-.19,1.8c-.13,6.35-.49,12.7.19,19v20.2a120.12,120.12,0,0,0,0,20.25q0,10.11,0,20.22C398.63,277,398.56,277.55,398.5,278.14Z"
                                transform="translate(-9.28 -9.28)"
                            />
                        </svg>
                    </figure>
                    <h3>Tareas</h3>
                </Link>
            </StyledElement>
            <StyledElement className={economy}>
                <Link to="/economy">
                    <figure>
                        <svg
                            fill="currentColor"
                            id="Layer_1"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 496"
                        >
                            <path d="M248,0C111,0,0,111,0,248S111,496,248,496,496,385,496,248,385,0,248,0Zm87.18,378.78c0,24-58.57,43.59-130.77,43.59S73.63,402.82,73.63,378.78V349.69c28.13,19.82,79.56,29.09,130.78,29.09s102.64-9.27,130.77-29.09Zm0-65.39c0,24-58.57,43.59-130.77,43.59S73.63,337.43,73.63,313.39V278.24c28.13,23.16,79.62,35.15,130.78,35.15s102.64-12,130.77-35.15Zm-130.77-21.8c-72.2,0-130.78-24.38-130.78-54.49s58.58-54.49,130.78-54.49S335.18,207,335.18,237.1,276.61,291.59,204.41,291.59Zm218-43.59c0,16.14-26.36,30.17-65.39,37.73V242.41c26.36-4.7,49.59-12.32,65.39-23.49Zm0-65.39c0,16.55-27.72,31-68.59,38.35-6-16.14-20.77-29.22-40.87-39,43.73-2.18,85.28-11.38,109.46-28.47ZM291.59,160.82c-72.2,0-130.77-19.55-130.77-43.6s58.57-43.59,130.77-43.59,130.78,19.55,130.78,43.59S363.79,160.82,291.59,160.82Z" />
                        </svg>
                    </figure>
                    <h3>Economía</h3>
                </Link>
            </StyledElement>
        </StyledNavBarContainer>
    );
};

export default NavBar;
