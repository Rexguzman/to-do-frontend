import axios from 'axios';
import config from '../config/index.js';

const localUrl = config.ssrProductionUrl;

export const deleteToDo = (payload) => ({
    type: 'DELETE_TO_DO',
    payload,
});

export const setComplete = (payload) => ({
    type: 'SET_COMPLETE',
    payload,
});

export const loginRequest = (payload) => {
    const info = {
        ...payload,
        isLogged: true,
    };
    return {
        type: 'LOGIN_REQUEST',
        info,
    };
};

export const logoutRequest = (payload) => {
    const info = {
        ...payload,
        isLogged: false,
    };
    return {
        type: 'LOGOUT_REQUEST',
        info,
    };
};

export const registerRequest = (payload) => ({
    type: 'REGISTER_REQUEST',
    payload,
});

export const newToDo = (payload) => {
    return {
        type: 'NEW_TO_DO',
        payload,
    };
};

export const editToDo = (payload) => ({
    type: 'EDIT_TO_DO',
    payload,
});

export const setError = (payload) => ({
    type: 'SET_ERROR',
    payload,
});

export const deleteError = (payload) => ({
    type: 'DELETE_ERROR',
    payload,
});

export const registerUser = (payload, redirectUrl) => {
    return (dispatch) => {
        axios
            .post(`${localUrl}/auth/sign-up`, payload)
            .then(({ data }) => dispatch(registerRequest(data)))
            .then(() => {
                window.location.href = redirectUrl;
            })
            .catch((error) => dispatch(setError(error)));
    };
};

export const loginUser = ({ email, password }, redirectUrl) => {
    return (dispatch) => {
        axios({
            url: `${localUrl}/auth/sign-in`,
            method: 'post',
            auth: {
                username: email,
                password,
            },
        })
            .then(({ data }) => {
                sessionStorage.setItem('name', data.user.name);
                sessionStorage.setItem('email', data.user.email);
                sessionStorage.setItem('id', data.user.id);
                sessionStorage.setItem(
                    'verifiedEmail',
                    Boolean(data.user.verifiedEmail)
                );
                sessionStorage.setItem('isLogged', Boolean('true'));
                document.cookie = `email=${data.user.email}`;
                document.cookie = `name=${data.user.name}`;
                document.cookie = `id=${data.user.id}`;
                document.cookie = `verifiedEmail=${data.user.verifiedEmail}`;
                document.cookie = `token=${data.token}`;
                dispatch(loginRequest(data.user));
            })
            .then(() => {
                window.location.href = redirectUrl;
            })
            .catch((error) => dispatch(setError(error)));
    };
};

export const googleLogin = (redirectUrl) => {
    return (dispatch) => {
        axios({
            url: `${localUrl}/auth/success`,
            method: 'get',
            withCredentials: true,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
            },
        })
            .then(({ data }) => {
                sessionStorage.setItem('name', data.user.name);
                sessionStorage.setItem('email', data.user.email);
                sessionStorage.setItem('id', data.user.id);
                sessionStorage.setItem(
                    'verifiedEmail',
                    data.user.verifiedEmail
                );
                sessionStorage.setItem('isLogged', Boolean('true'));
                document.cookie = `email=${data.user.email}`;
                document.cookie = `name=${data.user.name}`;
                document.cookie = `id=${data.user.id}`;
                document.cookie = `verifiedEmail=${data.user.verifiedEmail}`;
                document.cookie = `token=${data.token}`;
                dispatch(loginRequest(data.user));
            })
            .then(() => {
                window.location.href = redirectUrl;
            })
            .catch((error) => dispatch(setError(error)));
    };
};

export const toDoRequest = (userId) => {
    return (dispatch) => {
        axios({
            url: `${localUrl}/to-dos/${userId}`,
            method: 'get',
            //withCredentials: true,
        })
            .then(({ data }) => {
                dispatch(toDoListed(data.data));
            })
            .catch((error) => dispatch(setError(error)));
    };
};

export const toDoListed = (payload) => ({
    type: 'TO_DO_LISTED',
    payload,
});

export const newUserToDo = (payload) => {
    return (dispatch) => {
        axios({
            url: `${localUrl}/user-to-dos`,
            method: 'post',
            data: payload,
            //withCredentials: true,
        })
            .then(({ data }) => {
                dispatch(newToDo(data));
            })
            .catch((error) => dispatch(setError(error)));
    };
};

export const deleteToDoUser = (toDoId) => {
    return (dispatch) => {
        axios({
            url: `${localUrl}/user-to-dos/${toDoId}`,
            method: 'delete',
            //withCredentials: true,
        })
            .then(({ data }) => {
                dispatch(deleteToDo(data.data));
            })
            .catch((error) => dispatch(setError(error)));
    };
};

export const updateToDoUser = (payload) => {
    return (dispatch) => {
        axios({
            url: `${localUrl}/user-to-dos`,
            method: 'put',
            data: payload,
            //withCredentials: true,
        })
            .then(({ data }) => {
                dispatch(editToDo(data.data));
            })
            .catch((error) => dispatch(setError(error)));
    };
};

export const updateCompleted = (payload) => {
    return (dispatch) => {
        axios({
            url: `${localUrl}/user-to-dos/completed`,
            method: 'put',
            data: payload,
            //withCredentials: true,
        })
            .then(({ data }) => {
                dispatch(setComplete(data.data));
            })
            .catch((error) => dispatch(setError(error)));
    };
};
