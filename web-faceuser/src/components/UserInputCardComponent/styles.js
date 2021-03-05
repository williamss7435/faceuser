import styled from 'styled-components';


export const Container = styled.div`
    background: #fff;
    width: 100%;
    //box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
`;

export const CardHeader = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;

    span {
        font-size: 9px;
    }

    img {
        background: #fafafa;
        width: 120px;
        height: 120px;
        border: 1px solid #b9b9b9;
        border-radius: 60%;
        margin-bottom: 16px;
        cursor: pointer;
    }

    div {
        font-weight: bold;
        font-size: 16px;
        flex: 5;
        margin-left: 10px;
    }

`;

export const CardBody = styled.div`
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

    div {
        font-weight: bold;
        font-size: 16px;
        flex: 5;
        margin-left: 10px;
    }

`;

export const CardActions = styled.div`
    width: 100%;
    display: flex;
    padding: 5px 12px 8px;

    .btn-save:hover{
        background: #d5ebdb;
    }

    .btn-cancel:hover{
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