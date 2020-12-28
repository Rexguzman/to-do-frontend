import React from 'react'
import { StyledLoadingContainer } from './Loading.styled';

export const Loading = () => {
    return (
        <StyledLoadingContainer>
            <div className="lds-dual-ring"></div>
        </StyledLoadingContainer>
    )
}

export default Loading;
