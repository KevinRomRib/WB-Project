import styled from "styled-components";

export const Ul = styled.ul`
    padding-top: 10px;
`;

export const Li = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #c5c5c5be;
    :hover {
        background-color: #e1bee7;
        p {
            color: white;
        }
    }
`;

export const Nome = styled.p`
    display: flex;
    align-items: center;
    height: 50px;
    color: #4eaeb4;
    font-size: 20px;
    padding-left: 40px;
`;

export const Trash = styled.div`
    padding-right: 40px;
    font-size: 20px;
    cursor: pointer;
    color: #ff4141;
    :hover {
        color: #ff4141d0;
    }
`;

export const DivOpcoes = styled.div`
    display: flex;
    gap: 20px;
`;

export const DivNomePreco = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
`;

export const Icone = styled.div`
    font-size: 20px;
    cursor: pointer;
    color: black;
    :hover {
        color: #070707c3;
    }
`;