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
            <StyledDashboardContainer>
                <NavBar economy={'select_item'} />
                <StyledItemContainer>
                    <section></section>
                </StyledItemContainer>
            </StyledDashboardContainer>
        </React.Fragment>
    );
};

export default Economy;
