import React from 'react';
import { StyledSearchBar } from './SearchBar.styled';

const SearchBar = ({filtered}) => {
    return(
        <StyledSearchBar>
            <input
            type="text" 
            placeholder="Buscar..."
            value={filtered.query}
            onChange={(e) => {
                filtered.setQuery(e.target.value);
            }}
            autoComplete="off"         
            />
        </StyledSearchBar>
    )
}

export default SearchBar;