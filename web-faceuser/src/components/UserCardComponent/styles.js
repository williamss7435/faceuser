import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    width: 100%;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    margin: 0px 5px 16px;
`;

export const CardHeader = styled.div`
    border-bottom: solid 1px #ececec;
    padding: 12px;
    display: flex;
    align-content: center;
  
    align-items: center;
    
    img {
        background: #fafafa;
        width: 60px;
        height: 60px;
        border: 1px solid #b9b9b9;
        border-radius: 60%;
    }

    span {
        margin-left: 10px;
        font-size: 12px;
        color: #b9b9b9;
        flex: 1;
    }

    div {
        font-weight: bold;
        font-size: 16px;
        flex: 5;
    }

`;

export const CardActions = styled.div`
    width: 100%;
    display: flex;
    padding: 5px 12px 8px;

    .btn-edit:hover{
        background: #ebebd5;
    }

    .btn-delete:hover{
        background: #ebd5d5;
    }
`;

export const CardButton  = styled.button`
    width: 100px;
    background: none;
    border: none;
    background: #f4f8f9;
    border-radius: 6px;
    font-weight: bold;
    font-size: 12px;
    transition: 0.6s;
    margin-left: 15px;
    padding: 3px;
    
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;

    span {
        margin-left: 5px;
    }
`;