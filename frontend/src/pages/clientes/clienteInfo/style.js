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
    p.primeiro {
        font-family: Arial;
        color: #4eaeb4;
        font-weight: bold;
    }
    p.segundo {
        font-size: 20px;
        color: #9a9a9a;
    }
    `;

export const DivOpcoes = styled.div`
    display: flex;
    gap: 20px;
`;

export const Icone = styled.div`
    font-size: 20px;
    cursor: pointer;
    color: black;
    :hover {
        color: #070707c3;
    }
`;