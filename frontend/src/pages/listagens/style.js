import styled from "styled-components";

export const DivGeral = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
`;

export const Titulo = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #4eaeb4;
    font-size: 25px;
    padding-top: 70px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const Subtitulo = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4eaeb4;
    font-size: 25px;
    padding-top: 10px;
    text-decoration: underline;
`;

export const Li = styled.li`
    display: flex;
    align-items: center;
    color: #4eaeb4;
    font-size: 20px;
    padding-top: 15px;
`;

export const DivMascFem = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    gap: 100px;
`;