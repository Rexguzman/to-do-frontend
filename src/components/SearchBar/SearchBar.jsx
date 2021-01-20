import React from 'react';
import PropTypes from 'prop-types';
import { StyledSearchBar } from './SearchBar.styled';

const SearchBar = props => {
    const { filtered } = props

    return (
        <StyledSearchBar>
            <figure>
                <svg viewBox="0 0 55 55">
                    <g id="search-circle-solid" transform="translate(0.5 0.5)">
                        <path
                            d="M27.5.5a27,27,0,1,0,27,27A27,27,0,0,0,27.5.5ZM44.225,42.508l-1.787,1.785a1.619,1.619,0,0,1-2.364-.005q-3.337-3.333-6.673-6.667a1.7,1.7,0,0,1-.513-1.242c0-.327,0-.653,0-1.008a13.924,13.924,0,0,1-11.214,2.7,13.594,13.594,0,0,1-8.685-5.4,14.062,14.062,0,1,1,22.372.228c.333,0,.641.01.948,0a1.763,1.763,0,0,1,1.372.561Q40.949,36.736,44.228,40A1.635,1.635,0,0,1,44.225,42.508Z"
                            transform="translate(-0.5 -0.5)"
                            fill="currentColor"
                        />
                        <path
                            d="M148.079,139.332a8.642,8.642,0,1,0,8.539,8.743,8.652,8.652,0,0,0-8.539-8.743Z"
                            transform="translate(-124.189 -124.217)"
                            fill="currentColor"
                        />
                    </g>
                </svg>
            </figure>
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
    );
};

SearchBar.propTypes = {
    filtered: PropTypes.object,
}

export default SearchBar;
