import React from "react";
import { Link } from "react-router-dom"

// Importando Modal
import ModalRemover from '../../components/listaProdutos/modalRemoverProduto/modal'

// Estilo
import GlobalStyle from './globalStyle';
import { DivGeral, DivBotaoLink } from './style'

// importando componentes
import Nav from '../../components/nav'
import ListaProdutos from '../../components/listaProdutos'

function Produtos() {

    return (
        <>
            <GlobalStyle/>

            <ModalRemover/>
            
            <DivGeral>
                <Nav/>
                <ListaProdutos/>
                <Link to={'/produto/cadastrar'}>
                    <DivBotaoLink>
                        <ion-icon name="add-circle"></ion-icon>
                    </DivBotaoLink>
                </Link>
            </DivGeral>
        </>
    )

}

export default Produtos;