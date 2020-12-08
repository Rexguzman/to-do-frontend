import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { NavBar, PlusIcon, SearchBar, ToDoItem } from '../../components';
import { StyledDashboardContainer, StyledItemContainer } from './Home.styled';
import NewToDoForm from '../../components/NewToDoForm';

import { useIsOpen } from '../../hooks/useIsOpen';
import useFilter from '../../hooks/useFilter';

import ReactDOMServer from 'react-dom/server';

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
                    <NewToDoForm open={open}/>
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
