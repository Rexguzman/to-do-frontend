import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutRequest } from '../../actions';
import axios from 'axios';

import { NavBar } from '../../components';
import { StyledDashboardContainer } from '../Economy/Economy.styled';
import { StyledProfileContainer, StyledItemContainer } from './Profile.styled';

const Profile = (props) => {
    const { user, logoutRequest } = props;

    const handleLogout = () => {
        document.cookie = 'email=';
        document.cookie = 'name=';
        document.cookie = 'id=';
        logoutRequest({});
        window.location.href = '/#/login';
    };

    const handleEmailConfirm = () => {
        axios({
            url: `https://to-do-api.rexguzman.vercel.app/email/verify/${user.id}`,
            method: 'get',
            //withCredentials: true,
        })
    }

    return (
        <StyledDashboardContainer>
            <NavBar profile={'select_item'} />
            <StyledItemContainer>
                <StyledProfileContainer>
                    <div className="user_pic_container">
                        <svg
                            className="user_pic"
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
                    </div>
                    <div className="profile_item_container">
                        <p className="profile_value">Nombre:</p>
                        <div className="user_info">
                            <p>{user.name}</p>
                        </div>
                    </div>
                    <div className="profile_item_container">
                        <p className="profile_value">Email:</p>
                        <div className="user_info">
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <div className="profile_buttons_container">
                        <div className="profile_button">
                            <figure>
                                <svg
                                    id="Layer_1"
                                    data-name="Layer 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 496"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8ZM227.28,93.06a77,77,0,1,1-77,77A77,77,0,0,1,227.28,93.06ZM290,344.83l-.72,6.68-4.09,36.62a28.94,28.94,0,0,0,1.56,12.81H121.45a28.88,28.88,0,0,1-28.87-28.87v-25a80.84,80.84,0,0,1,80.82-80.82h10a104.7,104.7,0,0,0,87.68,0h10a80,80,0,0,1,60.07,27.36l-46.48,46.48Zm61.51,52-36.62,4.09a9.57,9.57,0,0,1-10.58-10.59l4.09-36.68,82.92-82.86,43.12,43.11Zm96.58-96.52-43.18-43.11,2.47-2.47L430.11,232a14.41,14.41,0,0,1,20.32,0l22.79,22.79a14.47,14.47,0,0,1,0,20.39Z"
                                        transform="translate(-8 -8)"
                                    />
                                </svg>
                            </figure>
                            <button>Editar perfil</button>
                        </div>
                        <div className="profile_button">
                            <figure>
                                <svg
                                    id="Layer_1"
                                    data-name="Layer 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 496"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8ZM222.64,388.41a8.85,8.85,0,0,1-8.83,8.82H152a70.63,70.63,0,0,1-70.62-70.61V185.39A70.63,70.63,0,0,1,152,114.78h61.78a8.85,8.85,0,0,1,8.83,8.83V153a8.86,8.86,0,0,1-8.83,8.83H152a23.51,23.51,0,0,0-23.54,23.53V326.62A23.52,23.52,0,0,0,152,350.16h61.78a8.85,8.85,0,0,1,8.83,8.83Zm100.77,3.68c-11,11-30.16,3.31-30.16-12.51V309h-100a17.62,17.62,0,0,1-17.66-17.66V220.7a17.62,17.62,0,0,1,17.66-17.65h100V132.43c0-15.74,19.05-23.53,30.16-12.5L447,243.5a17.81,17.81,0,0,1,0,25Z"
                                        transform="translate(-8 -8)"
                                    />
                                </svg>
                            </figure>
                            <button onClick={handleLogout}>
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                    <button onClick={handleEmailConfirm} >Confirmar Email</button>
                </StyledProfileContainer>
            </StyledItemContainer>
        </StyledDashboardContainer>
    );
};

Profile.propTypes = {
    user: PropTypes.object,
    logoutRequest: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = {
    logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
