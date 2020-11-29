import styled from 'styled-components';

export const StyledDashboardContainer = styled.section`
    	display:flex;
`

export const StyledItemContainer = styled.section`
    margin-left: 115px;
    width: -webkit-fill-available;
    margin-right: 20px;

    @media (max-width: ${({ theme }) => theme.tablet}) {
        margin-left: 80px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-left: 20px;
    }
`