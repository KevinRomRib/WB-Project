import React from "react";
import { Link } from "react-router-dom"

// Importando styles
import GlobalStyle from './globalStyle'
import { NavBar, LinkNav, Logo } from './style'

function Nav() {
    return (
        <>  
            <GlobalStyle/>
            <NavBar>
                <Logo>WB</Logo>
                <div>

                    <Link to={'/'}>
                        <LinkNav>Clientes |</LinkNav>
                    </Link>

                    <Link to={'/produtos'}>
                        <LinkNav>Produtos |</LinkNav>
                    </Link>
                    
                    <Link to={'/servicos'}>
                        <LinkNav>Serviços |</LinkNav>
                    </Link>

                    <Link to={'/'}>
                        <LinkNav>Listagens |</LinkNav>
                    </Link>
                    
                    <Link to={'/pedido'}>
                        <LinkNav>Fazer um Pedido |</LinkNav>
                    </Link>

                </div>
            </NavBar>
        </>
    )

}

export default Nav;