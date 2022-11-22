import React from 'react';

import './modalClass.css'
import { Modal, BotaoCancelar, BotaoExcluir, Container, ModalTexto, DivOpcoes } from './style'

function ModalRemover() {
    
    function fechar() {
        document.querySelector('.modal').classList.remove('show')
    }
    function remover() {
        document.querySelector('.modal').classList.remove('show')
    }


    return (
        <>
            <Container>
                <Modal className="modal">
                        <ModalTexto>Tem certeza que deseja <br /> excluir este Cliente?</ModalTexto>
                        <DivOpcoes>
                            <BotaoExcluir onClick={remover}>Excluir</BotaoExcluir>
                            <BotaoCancelar onClick={fechar}>Cancelar</BotaoCancelar>
                        </DivOpcoes>
                </Modal>
            </Container>
        </>
    )
}

export default ModalRemover;