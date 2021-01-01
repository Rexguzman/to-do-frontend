import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const sessionState = {
    name: sessionStorage.getItem('name'),
    email: sessionStorage.getItem('email'),
    id: sessionStorage.getItem('id'),
    isLogged: !!sessionStorage.getItem('isLogged'),
};

const initialState = {
    user: {
        name: sessionState.name,
        email: sessionState.email,
        id: sessionState.id,
        isLogged: sessionState.isLogged,
    },
    notes: [
        {
            id: 'default',
            title: 'Bienvenido',
            description:
                'Esta es una tarea por hacer, puedes completarla con icono redondo de la izquierda, editarla y borrarla con los iconos de la derecha y agregar nuevas notas con el icono +',
            completed: false,
        },
    ],
    error: false,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
