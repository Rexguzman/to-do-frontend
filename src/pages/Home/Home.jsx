import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toDoRequest } from '../../actions';

import { Loading, NavBar, PlusIcon, SearchBar, ToDoItem } from '../../components';
import { StyledDashboardContainer, StyledItemContainer } from './Home.styled';
import NewToDoForm from '../../components/NewToDoForm';

import { useIsOpen } from '../../hooks/useIsOpen';
import useFilter from '../../hooks/useFilter';

const Home = (props) => {
    const { notes, user, toDoRequest } = props;
    //-----------> Custom Hooks
    const open = useIsOpen();
    const filtered = useFilter(notes);

    //-----------> Fetch to do list with Redux
    useEffect(() => {
        toDoRequest(user.id);
    }, [window.location.href]);

    return (
        <StyledDashboardContainer>
            <NavBar toDos={'select_item'} />
            <StyledItemContainer>
                <SearchBar filtered={filtered} />
                {notes.length == 0 ? (
                    <h3 className="empty_to_dos">Aun no tienes tareas</h3>
                ) : null}
                <section>
                    {filtered.filteredResults.map((item) => (
                        <ToDoItem key={item._id} {...item} />
                    ))}
                </section>
                <figure onClick={() => open.handleClick()}>
                    <PlusIcon />
                </figure>
                <NewToDoForm open={open} />
            </StyledItemContainer>
        </StyledDashboardContainer>
    );
};

Home.propTypes = {
    notes: PropTypes.array,
    user: PropTypes.object,
    toDoRequest: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        user: state.user,
    };
};

const mapDispatchToProps = {
    toDoRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
