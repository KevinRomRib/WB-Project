import React from "react";
import { Link } from "react-router-dom"

// Importando Modal
import ModalRemover from '../../components/listaClientes/modalRemoverCliente/modal'

// Estilo
import GlobalStyle from './globalStyle';
import { DivGeral, DivBotaoLink } from './style'

// importando componentes
import Nav from '../../components/nav'
import ListaClientes from '../../components/listaClientes'

function Clientes() {

    return (
        <>
            <GlobalStyle/>

            <ModalRemover/>
            
            <DivGeral>
                <Nav/>
                <ListaClientes/>
                <Link to={'/cliente/cadastrar'}>
                    <DivBotaoLink>
                        <ion-icon name="add-circle"></ion-icon>
                    </DivBotaoLink>
                </Link>
            </DivGeral>
        </>
    )

}

export default Clientes;