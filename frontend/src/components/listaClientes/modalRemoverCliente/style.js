import styled from 'styled-components'


export const BotaoExcluir = styled.button`
    color: #fff;
    border: none;
    font-size: max(1.5vw, min(10px));
    cursor: pointer;
    text-align: center;
    width: max(30vw, min(10px));
    height: max(7vh, min(1px));
    background: #EB2626;
    box-shadow: 1px 1px 2px 3px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
`;

export const BotaoCancelar = styled.button`
    color: #fff;
    border: none;
    font-size: max(1.5vw, min(10px));
    cursor: pointer;
    text-align: center;
    width: max(30vw, min(10px));
    height: max(7vh, min(1px));
    background: #26D04C;
    box-shadow: 1px 1px 2px 3px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
`;

export const DivOpcoes = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 80px;
    padding-top: 15px;
`;

export const ModalTexto = styled.p`
    background-color: transparent;
    color: #4eaeb4;
    border: none;
    font-size: max(2vw, min(20px));
    font-family: Arial;
    cursor: pointer;
    text-align: center;
    margin-bottom: 5%;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
`;

export const BotaoModal = styled.input`
    background-color: #EB2626;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
`;

export const Modal = styled.div`
    z-index: 2;
    background: #fff;
    border: 2px solid #4eaeb4;
    position: fixed;
    top:30%;
    left: 35%;
    width: max(30vw, min(300px));
    height: max(30vh, min(100px));
    border-radius: 20px;
    overflow-y: scroll;
    display: none;
    box-sizing: border-box;
    padding: 2%;
    overflow-y: hidden;
    /* @media (max-width: 1230px) {
        width: 60;
    } */
`;