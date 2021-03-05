import styled from 'styled-components';

import {Container as bootstrapContainer, Row} from 'react-bootstrap';

export const Container = styled(bootstrapContainer).attrs(props => ({
    fluid: true
}))`
    margin-top: 15px;
`;

export const Title = styled(Row)`
        font-size: 22px;
        font-weight: bold;
        margin-left: 0;
`;

export const NotFoundUserRow = styled(Row)`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-size: 16px;
    color: #b8b8b8;
`;
/*
export const Pages = styled(Row)`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    button {
        border: none;
        background: #4266af;
        color: #fff;
        font-weight: bold;
        padding: 4px 20px;
        border-radius: 4px;
        transition: 0.6s;
        
        span {
            margin: 0 5px;
        }

        :hover{
            background: #324e87;
        }
    }

`;
*/
