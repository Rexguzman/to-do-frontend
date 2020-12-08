import React from 'react';

import { NavBar, SearchBar, ToDoItem } from '../../components';
import {
    StyledDashboardContainer,
    StyledItemContainer,
} from './Economy.styled';

import useFilter from '../../hooks/useFilter';

const Economy = () => {
    return (
        <React.Fragment>
            <NavBar economy={'select_item'} />
            <StyledDashboardContainer>
                
            </StyledDashboardContainer>
        </React.Fragment>
    );
};

export default Economy;
