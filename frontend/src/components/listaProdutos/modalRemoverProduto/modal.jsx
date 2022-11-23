import React from 'react';
import api from '../../../services/api';
import { useParams } from "react-router-dom"

import './modalClass.css'
import { Modal, BotaoCancelar, BotaoExcluir, Container, ModalTexto, DivOpcoes } from './style'

function ModalRemover() {

    const FindId = useParams();
    const idUsuario = new Number(FindId.id)

    function fechar() {
        document.querySelector('.modal').classList.remove('show')
    }
    async function remover() {
        await api.delete(`/produtos/${idUsuario}`);
        document.querySelector('.modal').classList.remove('show')
        window.location.reload()
    }


    return (
        <>
            <Container>
                <Modal className="modal">
                        <ModalTexto>Tem certeza que deseja <br /> excluir este Cliente?</ModalTexto>
                        <DivOpcoes>
                            <BotaoExcluir onClick={() => remover()}>Excluir</BotaoExcluir>
                            <BotaoCancelar onClick={fechar}>Cancelar</BotaoCancelar>
                        </DivOpcoes>
                </Modal>
            </Container>
        </>
    )
}

export default ModalRemover;