import React from 'react';

import { NavBar, SearchBar, ToDoItem } from '../../components';
import {
    StyledDashboardContainer,
    StyledItemContainer,
} from '../Economy/Economy.styled';

import useFilter from '../../hooks/useFilter';

const Profile = () => {
    return (
        <StyledDashboardContainer>
            <NavBar profile={'select_item'} />
            <StyledItemContainer>
                <section></section>
            </StyledItemContainer>
        </StyledDashboardContainer>
    );
};

export default Profile;
