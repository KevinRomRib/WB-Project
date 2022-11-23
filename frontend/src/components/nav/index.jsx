import React from "react";
import { Link } from "react-router-dom"

// Importando styles
import GlobalStyle from './globalStyle'
import { NavBar, LinkNav, LinkNavHam, Logo, DivNavHam, DivLinks } from './style'
import './nav.css'

function Nav() {

    function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <>  
            <GlobalStyle/>
            <NavBar>
                <Logo>WB</Logo>
                <DivNavHam>
                    <DivLinks>

                        <Link to={'/'}>
                            <LinkNav>Clientes |</LinkNav>
                        </Link>

                        <Link to={'/produtos'}>
                            <LinkNav>Produtos |</LinkNav>
                        </Link>
                        
                        <Link to={'/servicos'}>
                            <LinkNav>Serviços |</LinkNav>
                        </Link>

                        <Link to={'/listagens'}>
                            <LinkNav>Listagens |</LinkNav>
                        </Link>
                        
                        <Link to={'/pedido'}>
                            <LinkNav>Fazer um Pedido |</LinkNav>
                        </Link>

                    </DivLinks>

                    <span className="icon_nav_style" onClick={openNav}>&#9776;</span>
                </DivNavHam>
            </NavBar>

            <header>
                <div>
                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>           
                        <Link to={'/'}>
                            <LinkNavHam>Clientes</LinkNavHam>
                        </Link>

                        <Link to={'/produtos'}>
                            <LinkNavHam>Produtos</LinkNavHam>
                        </Link>
                        
                        <Link to={'/servicos'}>
                            <LinkNavHam>Serviços</LinkNavHam>
                        </Link>

                        <Link to={'/listagens'}>
                            <LinkNavHam>Listagens</LinkNavHam>
                        </Link>
                        
                        <Link to={'/pedido'}>
                            <LinkNavHam>Fazer um Pedido</LinkNavHam>
                        </Link>
                    </div>
                </div>
        
            </header>
        </>
    )
}

export default Nav;