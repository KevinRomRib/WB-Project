import { React, useEffect, useState } from "react";
import api from "../../services/api";

// Estilo
import GlobalStyle from './globalStyle';
import { DivGeral, Titulo, Subtitulo, Li, DivMascFem } from './style'

// importando componentes
import Nav from '../../components/nav'

function Listagens() {

    // Clientes

    const [clientes, setClientes] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {
            const response = await api.get("/clientes");
            setClientes(response.data);
        }
        loadUsuarios();
    }, []);

    // Clientes por genero //

    // Masculino
    const filterM = clientes.filter(cliente => cliente.genero=='M')
    const masc = filterM.map((cliente) =>
        <Li key={cliente.nome}>
            • {cliente.nome}
        </Li>
    )

    // Feminino
    const filterF = clientes.filter(cliente => cliente.genero=='F')
    const fem = filterF.map((cliente) =>
        <Li key={cliente.nome}>
            • {cliente.nome}
        </Li>
    )


    return (
        <>
            <GlobalStyle/>
            
            <DivGeral>
                <Nav/>

                <div>
                    
                    <Titulo>Lista dos clientes por gênero</Titulo>

                    <DivMascFem>

                        {/* Masculino */}
                        <div>
                            <Subtitulo>Masculino</Subtitulo>
                            <ul>
                                {masc}
                            </ul>
                        </div>

                        <div>
                            {/* Feminino */}
                            <Subtitulo>Feminino</Subtitulo>
                            <ul>
                                {fem}
                            </ul>
                        </div>

                    </DivMascFem>
                    
                    <Titulo>Lista dos produtos mais consumidos</Titulo>

                    <div>
                        <ul>
                            
                        </ul>
                    </div>
                    
                    <Titulo>Lista dos produtos mais consumidos por gênero</Titulo>

                    <div>
                        <ul>

                        </ul>
                    </div>
                    
                    <Titulo>10 clientes que mais consumiram produtos em quantidade</Titulo>

                    <div>
                        <ul>

                        </ul>
                    </div>
                    
                    <Titulo>10 clientes que menos consumiram produtos em quantidade</Titulo>

                    <div>
                        <ul>

                        </ul>
                    </div>
                    
                    <Titulo>5 clientes que mais consumiram em valor</Titulo>

                    <div>
                        <ul>

                        </ul>
                    </div>

                </div>
            </DivGeral>
        </>
    )

}

export default Listagens;