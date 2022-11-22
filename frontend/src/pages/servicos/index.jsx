import React from "react";
import { Link } from "react-router-dom"

// Importando Modal
import ModalRemover from '../../components/listaServicos/modalRemoverServico/modal'

// Estilo
import GlobalStyle from './globalStyle';
import { DivGeral, DivBotaoLink } from './style'

// importando componentes
import Nav from '../../components/nav'
import ListaServicos from '../../components/listaServicos'

function Servicos() {

    return (
        <>
            <GlobalStyle/>

            <ModalRemover/>
            
            <DivGeral>
                <Nav/>
                <ListaServicos/>
                <Link to={'/servico/cadastrar'}>
                    <DivBotaoLink>
                        <ion-icon name="add-circle"></ion-icon>
                    </DivBotaoLink>
                </Link>
            </DivGeral>
        </>
    )

}

export default Servicos;