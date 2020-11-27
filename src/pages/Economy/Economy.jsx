import React from 'react';

import {NavBar, SearchBar, ToDoItem} from '../../components'
import { StyledDashboardContainer, StyledItemContainer } from './Economy.styled';

const Economy = () => {
    return (
        <React.Fragment>
            <StyledDashboardContainer>
            <NavBar economy={"select_item"}/>
            <StyledItemContainer>
                <SearchBar/>
                <section>
                    
                </section>
            </StyledItemContainer>
            </StyledDashboardContainer>
        </React.Fragment>
    )
}

export default Economy;