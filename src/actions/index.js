import axios from 'axios';

export const deleteNote = (payload) => ({
    type: 'DELETE_NOTE',
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

export const logoutRequest = (payload) => ({
    type: 'LOGOUT_REQUEST',
    payload,
});

export const registerRequest = (payload) => ({
    type: 'REGISTER_REQUEST',
    payload,
});

let idToDo = 0;

export const newToDo = (payload) => {
    const info = {
        ...payload,
        id: idToDo++,
    };
    return {
        type: 'NEW_TO_DO',
        info,
    };
};

export const editToDo = (payload) => ({
    type: 'EDIT_TO_DO',
    payload,
});

export const setError = payload => ({
    type: 'SET_ERROR',
    payload,
})

export const deleteError = payload => ({
    type: 'DELETE_ERROR',
    payload,
})

export const registerUser = (payload, redirectUrl) => {
    return (dispatch) => {
        axios.post('https://to-do-ssr.vercel.app/auth/sign-up', payload).then(({data}) => dispatch(registerRequest(data))).then(()=>{
            window.location.href = redirectUrl
        }).catch(error => dispatch(setError(error)))
    }
}

export const loginUser = ({email,password}, redirectUrl) => {
    return (dispatch) => {
        axios({
            url: 'https://to-do-ssr.vercel.app/auth/sign-in',
            method: 'post',
            auth: {
                username: email,
                password
            }
        }).then(({data})=>{
            document.cookie = `email=${data.user.email}`;
            document.cookie = `name=${data.user.name}`;
            document.cookie = `id=${data.user.id}`;
            document.cookie = `token=${data.user.token}`;
            dispatch(loginRequest(data.user))
        }).then(() => {
            window.location.href = redirectUrl;
        }).catch(error => dispatch(setError(error)))
    }
}