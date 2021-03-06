import React from 'react';
import PropTypes from 'prop-types';
import { StyledToggleButton } from './ToggleButton.styled';

const ToggleButton = props => {
    const { toggleTheme } = props

    return (
        <React.Fragment>
            <StyledToggleButton>
                <button onClick={toggleTheme}>
                    <svg
                        width="35"
                        height="35"
                        viewBox="0 0 260 300"
                        fill="none"
                    >
                        <g>
                            <path
                                d="M230.664 105.807C227.387 98.3447 223.306 91.3178 218.532 84.8357L242.606 84.9316L230.664 105.807ZM129.904 260C133.997 260 138.041 259.776 142.022 259.339L129.904 280.137L117.786 259.339C121.767 259.776 125.81 260 129.904 260ZM41.2752 215.164L17.2019 215.068L29.1438 194.193C32.4211 201.655 36.5019 208.682 41.2752 215.164ZM230.664 194.193L242.606 215.068L218.532 215.164C223.306 208.682 227.387 201.655 230.664 194.193ZM41.2752 84.8357C36.5019 91.3178 32.4211 98.3447 29.1438 105.807L17.202 84.9316L41.2752 84.8357ZM117.786 40.6608L129.904 19.8631L142.022 40.6608C138.041 40.224 133.997 40 129.904 40C125.81 40 121.767 40.224 117.786 40.6608ZM209.904 150C209.904 194.183 174.087 230 129.904 230C85.721 230 49.9038 194.183 49.9038 150C49.9038 105.817 85.721 70 129.904 70C174.087 70 209.904 105.817 209.904 150Z"
                            />
                            <circle cx="95" cy="150" r="55" />
                        </g>
                    </svg>
                </button>
            </StyledToggleButton>
        </React.Fragment>
    );
};

ToggleButton.propTypes = {
    toggleTheme: PropTypes.func,
}

export default ToggleButton;
