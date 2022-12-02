import styled from "styled-components";

export const DivGeral = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
`;

export const DivLabelInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 40px;
    input{
        border-right: none;
        border-left: none;
        border-top: none;
        border-bottom-color: #e1bee7;
        outline: 0;
        width: 400px;
        height: 30px;
        font-size: 20px;
        color: #9a9a9a;
    }
    label{
        font-family: Arial;
        color: #4eaeb4;
        font-weight: bold;
    }
    select{
        border-color: #e1bee7;
        border-radius: 10px;
        outline: 0;
        width: 400px;
        height: 30px;
        font-size: 20px;
        color: #9a9a9a;
    }
`;

export const DivButton = styled.button`
    width: 150px;
    height: 40px;
    font-size: 20px;
    background-color: #e1bee7;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

export const DivSubmit = styled.div`
    display: flex; 
    justify-content: center;
    padding-top: 20px;
`;

export const DivListaRgs = styled.div`
    width: 150px;
    height: 40px;
    font-size: 20px;
    background-color: #e1bee7;
    color: white;
    border: none;
    border-radius: 10px;
`;