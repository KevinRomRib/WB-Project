import styled from 'styled-components'


export const BotaoExcluir = styled.button`
    color: #fff;
    border: none;
    font-size: 25px;
    cursor: pointer;
    text-align: center;
    width: 30%;
    height: 25%;
    background: #EB2626;
    box-shadow: 1px 1px 2px 3px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
`;

export const BotaoCancelar = styled.button`
    color: #fff;
    border: none;
    font-size: 25px;
    cursor: pointer;
    text-align: center;
    width: 30%;
    height: 25%;
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
    font-size: 35px;
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
    font-size: 25px;
    cursor: pointer;
    width: 13%;
    margin-right: 1%;
`;

export const Modal = styled.div`
    z-index: 2;
    background: #fff;
    border: 2px solid #4eaeb4;
    position: absolute;
    top:30%;
    left: 35%;
    width: 30%;
    height: 30%;
    border-radius: 20px;
    overflow-y: scroll;
    display: none;
    box-sizing: border-box;
    padding: 2%;
    overflow-y: hidden;
`;