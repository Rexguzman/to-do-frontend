export const deleteNote = payload => ({
    type: 'DELETE_NOTE',
    payload,
})

export const setComplete = payload => ({
    type: 'SET_COMPLETE',
    payload,
})

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
})

export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload,
})

let idToDo = 0;

export const newToDo = payload => {
    const info = {
        ...payload,
        id:idToDo++,
    }
    return ({
        type: 'NEW_TO_DO',
        info,
    })
}

export const editToDo = payload => ({
    type: 'EDIT_TO_DO',
    payload
})