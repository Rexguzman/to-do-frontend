import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { NavBar, PlusIcon, SearchBar, ToDoItem } from '../../components';
import { StyledDashboardContainer, StyledItemContainer } from './Home.styled';
import NewToDoForm from '../../components/NewToDoForm';

import { useIsOpen } from '../../hooks/useIsOpen';
import useFilter from '../../hooks/useFilter'

const Home = ({ notes }) => {
    const open = useIsOpen();
    const filtered = useFilter(notes);

    return (
        <StyledDashboardContainer>
            <NavBar toDos={'select_item'} />
            <StyledItemContainer>
                <SearchBar filtered={filtered}/>
                <section>
                    {filtered.filteredResults.map((item) => (
                        <ToDoItem key={item.id} {...item} />
                    ))}
                </section>
                <figure onClick={() => open.handleClick()}>
                    <PlusIcon />
                </figure>
                {ReactDOM.createPortal(
                    <NewToDoForm open={open} />,
                    document.getElementById('modal')
                )}
            </StyledItemContainer>
        </StyledDashboardContainer>
    );
};

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
    };
};

export default connect(mapStateToProps, null)(Home);
