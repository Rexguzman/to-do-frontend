const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(
                    (items) => items.id !== action.payload
                ),
            };
        case 'SET_COMPLETE':
            state.notes.find(
                (items) => items.id == action.payload.id
            ).completed = action.payload.completed;

            return {
                ...state,
                notes: [...state.notes],
            };
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.info,
            };
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload,
            };
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload,
            };
        case 'NEW_TO_DO':
            return {
                ...state,
                notes: [...state.notes, action.info],
            };
        case 'SET_ERROR':
            let error = true;
            return {
                ...state,
                error: error,
            };
        case 'DELETE_ERROR':
            error = false;
            return {
                ...state,
                error: error,
            };
        case 'EDIT_TO_DO':
            state.notes.find((items) => items.id == action.payload.id).title =
                action.payload.title;
            state.notes.find(
                (items) => items.id == action.payload.id
            ).description = action.payload.description;

            return {
                ...state,
                notes: [...state.notes],
            };
        default:
            return state;
    }
};

export default reducer;
