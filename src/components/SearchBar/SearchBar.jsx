import React from 'react';
import { StyledSearchBar } from './SearchBar.styled';

const SearchBar = () => {
    return(
        <StyledSearchBar>
            <input
            name="search"
            type="text" 
            placeholder="Buscar..."
            autoComplete="off"         
            />
        </StyledSearchBar>
    )
}

export default SearchBar;