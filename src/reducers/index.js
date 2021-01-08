const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_TO_DO':
            return {
                ...state,
                notes: state.notes.filter(
                    (items) => items._id !== action.payload
                ),
            };
        case 'SET_COMPLETE':
            state.notes.find(
                (items) => items._id == action.payload._id
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
            sessionStorage.clear();
            return {
                ...state,
                user: action.info,
                notes:[]
            };
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload,
            };
        case 'NEW_TO_DO':
            return {
                ...state,
                notes: [...state.notes, action.payload],
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: true,
            };
        case 'DELETE_ERROR':
            return {
                ...state,
                error: false,
            };
        case 'EDIT_TO_DO':
            state.notes.find((items) => items._id == action.payload._id).title =
                action.payload.title;
            state.notes.find(
                (items) => items._id == action.payload._id
            ).description = action.payload.description;

            return {
                ...state,
                notes: [...state.notes],
            };
            case 'TO_DO_LISTED':
            return {
                ...state,
                notes: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
