import React, {useState} from 'react';
import { connect } from 'react-redux';
import { deleteNote, setComplete, editToDo } from '../../actions';

import ConfirmationAlert from '../ConfirmationAlert';
import { StyledToDoItem } from './ToDoItem.styled';

import { useIsOpen } from '../../hooks/useIsOpen';

const ToDoItem = props => {

    const {id, title, description, completed} = props;

    const open = useIsOpen(); //Hook para el manejo de estado del botón de borrar

    const [isEditable, useIsEditable] = useState(false); //Hook para el manejo de esta del botón de editar

    const handlerDeleteNote = (itemId) => {
        props.deleteNote(itemId)
    }

    const handlerSetComplete = (completed, itemId) => {
        props.setComplete({
            completed:!completed,
            id: itemId,
        })
    }

    //---------------------> input

    const [form, setValues] = useState({
        id:id,
        title: title,
        description:description,
        completed:completed,
    })

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.editToDo(form);
        useIsEditable(false);
    }

    if(!isEditable){

        return(
            <React.Fragment>
                <StyledToDoItem completed={completed}>
                    <div>

                    <section className="to-do-item_text">
                        <h1 className="title">{title}</h1>
                        <p className="description">{description}</p>
                    </section>
                    <section className="icons_container">
                        {completed ? 
                            <figure onClick={() => handlerSetComplete(completed,id)} className="uncheck_icon">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                </svg>
                            </figure>
                        :
                            <figure onClick={() => handlerSetComplete(completed,id)} className="check_icon">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
                                </svg>
                            </figure>
                        }
                        <section className="options_icon">
                            <figure onClick={ () => useIsEditable(true)} className="edit_button">  
                                <svg fill="currentColor" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.01 497.01"><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm98,345.89v19.47c0,3.62,0,7.23-.12,10.84-.33,8.86-4.09,16-10.82,21.75-3.7,3.13-8.11,4.79-12.6,6.3H104a4.81,4.81,0,0,0-1-.51c-11.53-2.93-19-10-21.94-21.62-1.4-5.49-.92-11.16-1.08-16.76V217.19q0-10,0-20V177.72c0-2.75,0-5.5.08-8.24.15-4.55.6-9,2.54-13.27,3.49-7.67,9.35-12.71,16.91-16,.73-.27,1.62-.06,2.21-.75a43,43,0,0,1,6.42-.68c3.75,0,7.51-.09,11.26-.14q9.75.39,19.5,0h19.41q9.74.38,19.49,0h19.41q10,.39,20.06,0h19.41q9.75.39,19.5,0h19.4l11.72.26c5.79,6.25,5.71,8.65-.49,14.87-1.46,1.47-2.84,3-4.26,4.54a47.65,47.65,0,0,0-6.93,6.91c-4.5,3.67-8,8.37-12.61,11.92-2.25.7-4.59.58-6.88.78l-20.46,0-.68,0c-5.92-.21-11.84-.25-17.76,0q-10-.36-20,0c-6.5-.27-13-.25-19.5,0H158.32q-9.75-.36-19.49,0c-6,0-12-.07-18-.15-1.27,0-2,.29-1.87,1.74.69,5.88.08,11.79.36,17.68-.21.55-.53,1.1-.18,1.71-.27,6.11-.61,12.21.16,18.31q0,9.7,0,19.42a96.17,96.17,0,0,0,0,19.49q0,9.72,0,19.43c-.21.56-.53,1.11-.18,1.72-.28,5.91-.6,11.83.17,17.73v20c-.78,5.9-.46,11.82-.18,17.73-.35.62,0,1.16.18,1.72q0,9.72,0,19.43c-.89,6-.21,11.95-.35,17.92,0,1.67,1.27,1.61,2.45,1.61l17.43-.08H295c5.71,0,11.42,0,17.13.12,1.84,0,2.51-.51,2.47-2.41-.12-5.71-.07-11.42-.09-17.13l.18-1.15c.27-6.1.61-12.21-.17-18.3l0-19.42c.92-2.4-.15-5.09,1.08-7.44l11.45-12,8-8c2.12-2,4.17-4.15,6.37-6.11a7.35,7.35,0,0,1,10.29.16,30.56,30.56,0,0,1,2.11,2.67q.06,5.34.14,10.69,0,10,0,20,0,9.74,0,19.48Zm26.34-138.82c-.45.48-.86,1-1.29,1.49a30.87,30.87,0,0,0-4.85,5,2.61,2.61,0,0,0-1.47,1.32L359.63,236l-6.32,6.31-13.14,13.13q-3.17,3.15-6.31,6.31l-13.15,13.12-6.32,6.32c-4.74,4.44-9.34,9-13.76,13.76a45.53,45.53,0,0,0-5.64,5.64c-4.76,4.41-9.34,9-13.77,13.74l-5.68,5.7q-7.46,6.93-14.39,14.39a37.08,37.08,0,0,0-5.06,5,46.64,46.64,0,0,0-4.67,4.54,10.8,10.8,0,0,1-8.54,4.13c-2.07.11-4.13.45-6.2.69s-4.16.26-6.22.55c-4.41.62-8.88.67-13.24,1.68a151.47,151.47,0,0,0-20,2.28c-3.81.11-7.63,1.15-11.45,0a16.49,16.49,0,0,1-7.4-7.48c-.76-2.74-.5-5.54-.49-8.32.8-1.11.42-2.4.56-3.61a150.61,150.61,0,0,0,2.18-19.52A176.54,176.54,0,0,0,182.85,295c.22-1.78.51-3.55.65-5.34.27-3.44.88-6.58,3.94-8.91a17.81,17.81,0,0,0,4.82-5.14l5-5c4.9-4.68,9.86-9.32,14.3-14.47l.6-.43c1.36-1.36,2.72-2.71,4.07-4.07l1-1q7.17-6.7,13.87-13.88l1.05-1q1.74-1.75,3.49-3.49l1-1.05,13.87-13.87,1.11-1.12,4.46-4.47c5-4.64,9.78-9.46,14.44-14.43a15.44,15.44,0,0,0,5-5q7.47-7,14.44-14.42l5-5q7.47-6.94,14.45-14.42l.47-.47a30.6,30.6,0,0,0,5.06-5.24,9.6,9.6,0,0,0,1.16-.81c4.71-4.28,7.14-4.22,11.66.22,2.16,2.13,4.39,4.2,6.58,6.3h0q9.38,10.08,19.46,19.45h0l0,0h0c6.25,6.74,12.82,13.16,19.46,19.52.18.19.36.37.53.56,2.18,2.23,4.36,4.45,6.51,6.7C384.07,208.39,384.05,211.26,380.38,215.07ZM424,171.38c-2.05,2.08-4.07,4.21-6.1,6.31a35.73,35.73,0,0,0-5.07,5.07c-2.19,2.11-4.41,4.19-6.57,6.34-5.95,5.91-7,6-13.4.58q-5.72-6.26-12-12a74.19,74.19,0,0,0-7.47-7.47q-5.71-6.25-12-12a73.16,73.16,0,0,0-7.47-7.47q-5.73-6.25-12-12c-.29-.36-.56-.75-.88-1.09-3.85-4-3.8-6.6.17-10.62,2.52-2.55,5-5.15,7.46-7.74a35,35,0,0,0,5.73-5.74c2-1.91,4.07-3.72,5.93-5.74,5.39-5.82,11.93-8.64,19.88-8,1,.07,1.9,0,2.86.06a59.18,59.18,0,0,1,9.63,4.19l15.61,15.26a22.1,22.1,0,0,0,4.51,4.55q7.37,7.49,14.72,15a44.67,44.67,0,0,1,4.17,9.08c.09,3.66.71,7.28-.26,11A27.54,27.54,0,0,1,424,171.38Z" transform="translate(-7.5 -7.5)"/>
                                </svg>
                            </figure>
                            <figure onClick={ () => open.handleClick()} className="delete_button">  
                                <svg fill="currentColor" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497 497"><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8ZM375.6,183q-.94,16.68-1.94,33.36c-.61,6.61-1.16,13.23-1.21,19.88-.72,6.61-1.15,13.24-1.22,19.89A191.12,191.12,0,0,0,370,276c-.82,6.63-1.06,13.29-1.31,19.95q-.66,10.21-1.33,20.43-.61,10-1.25,19.91l-1.2,19.87c-.61,6.62-1.11,13.25-1.2,19.9-1,6.28-.39,12.73-2.07,18.94a47,47,0,0,1-5.56,10.39c-4.91,5.06-10.48,9-17.62,10.15a41.3,41.3,0,0,1-6.39.38q-76.08,0-152.15,0a52.82,52.82,0,0,1-8.71-.67A37.17,37.17,0,0,1,156,405.37a56.45,56.45,0,0,1-5.29-9.41c-2-6.49-1.35-13.29-2.33-19.89-.1-6.65-.6-13.27-1.21-19.88q-.6-10-1.21-19.91l-1.23-19.87c-.06-.59-.11-1.18-.17-1.77q-.58-9.36-1.16-18.71c-.28-6.63-.51-13.26-1.31-19.86a198.18,198.18,0,0,0-1.27-19.92c-.06-6.65-.5-13.27-1.22-19.88-.1-6.66-.6-13.28-1.22-19.9-.27-5-.57-10.05-.81-15.07-.41-8.42-1.38-16.8-1.38-25.23L156,176H356l19.81.1v0l0,0h0C375.77,178.4,375.74,180.71,375.6,183Zm19.65-32.74c-1.47,2.87-4,4.47-6.88,5.61l-12.45.33H136.09l-12.5-.18a13.83,13.83,0,0,1-7.33-6.59q-.12-6.62-.26-13.23c.51-4.67-.5-9.41.68-14,1.19-2.6,3.42-4.15,5.68-5.68,4.53-.9,9.14-.23,13.7-.63a150.62,150.62,0,0,0,19.93,0h19.85a155.93,155.93,0,0,0,19.93,0c5.15.4,5.15.4,7.44-4.21,1-2,2-4,3-6,3.09-6.45,8.11-9.62,15.34-9.56,13,.1,25.92,0,38.88,0,11.78.08,23.58-.38,35.36.36A18.12,18.12,0,0,1,306.41,107c.79,1.88,1.82,3.64,2.73,5.46,2.11,4.24,2.1,4.24,7.13,3.48l19.85,0a155.93,155.93,0,0,0,19.93,0H375.9c4.6.78,9.31-.37,13.9.79a12.81,12.81,0,0,1,5.95,6.43q.12,6.58.25,13.17C395.51,140.91,396.51,145.66,395.25,150.28Z" transform="translate(-7.5 -7.5)"/>
                                </svg>
                            </figure>
                        </section>
                    </section>
                    </div>
                </StyledToDoItem>
                    <ConfirmationAlert open={open} id={id} handlerDeleteNote={handlerDeleteNote}/>
            </React.Fragment>
        )
    }else {
        return(
            <React.Fragment>
                <StyledToDoItem >
                    <div className="active-edit-item">

                    <section className="to-do-item_text">
                        <form onSubmit={handleSubmit} id="edit_form">
                            <input 
                                className="input_title"
                                name="title" 
                                type="text" 
                                defaultValue={title}
                                onChange={handleInput}
                                autoComplete="off"
                                />
                            <textarea 
                                rows="4" 
                                className="input_description" 
                                name="description"
                                type="text" 
                                defaultValue={description} 
                                role="textbox" 
                                aria-multiline="true"
                                onChange={handleInput}
                            />
                        </form>
                        
                    </section>
                    <section className="icons_container">
                        <figure className="check_icon">
                            
                        </figure>
                        <section className="options_icon">
                            <button form="edit_form" type="submit">
                                <figure className="check_icon">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="green" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                    </svg>
                                </figure>
                            </button>
                            <figure onClick={ () => useIsEditable(false)} className="delete_button">  
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" viewBox="0 0 512 512">
                                    <path fill="red" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                                </svg>
                            </figure>
                        </section>
                    </section>
                    </div>
                </StyledToDoItem>
            </React.Fragment>
        )
    }

}

const mapDispatchToProps = {
    deleteNote,
    setComplete,
    editToDo,
}

export default connect(null, mapDispatchToProps)(ToDoItem);