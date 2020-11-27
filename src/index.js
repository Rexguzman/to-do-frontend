import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App'

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import reducer from './reducers';

const initialState = {
    "user" :{},
    "notes":[
        {
            "id": 1,
            "title": "Bienvenido",
            "description":"Esta es una tarea por hacer, puedes completarla con icono redondo de la izquierda, editarla y borrarla con los iconos de la derecha y agregar nuevas notas con el icono +",
            "completed": false
        }
    ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);