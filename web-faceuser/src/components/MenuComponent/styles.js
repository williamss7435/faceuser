import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`;

export const MenuButton = styled.button`
    background: none;
    border: none;
    color: #7a7a7a;
    font-weight: bold;
    width: 100%;
    height: 30px;
    transition: 0.3s;

    display: flex;
    padding-left: 15px;
    align-items: center;

    :hover {
        background: rgba(22, 51, 112, 0.3);
        color: #fff;
    }

    span {
        margin-left: 8px;
    }

`;

export const MenuTittle = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: #7a7a7a;
    margin-bottom: 15px;
    border-bottom: 1px solid #cacaca;
    padding: 0 5px;

`;