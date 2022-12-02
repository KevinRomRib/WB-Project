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
    const filterM = clientes.filter(cliente => cliente.genero==='M')
    const masc = filterM.map((cliente) =>
        <Li key={cliente.nome}>
            • {cliente.nome}
        </Li>
    )

    // Feminino
    const filterF = clientes.filter(cliente => cliente.genero==='F')
    const fem = filterF.map((cliente) =>
        <Li key={cliente.nome}>
            • {cliente.nome}
        </Li>
    )

    // Listagem Maior Consumo em Quantidade

    const [prodConsum, setProdConsum] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {
            const response = await api.get("/listagemPorQtnd");
            setProdConsum(response.data);
        }
        loadUsuarios();
    }, []);
    
    const listagemPorQtnd = prodConsum.map((consum) =>
        <Li key={consum.nome}>
            • {consum.nome}
        </Li>
    )

    // Listagem Maior Consumo Por Genero

    const [consumo, setConsumo] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {
            const response = await api.get("/listagemMaisConsumidosProdutosOuServicosPorGenero");
            setConsumo(response.data);
        }
        loadUsuarios();
    }, []);

    // Masculino
    const consumoM = consumo.ordenadoM?.[0].nome

    // Feminino
    const consumoF = consumo.ordenadoF?.[0].nome



    // Listagem geral dos serviços ou produtos mais consumidos

    const [maisConsum, setMaisConsum] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {
            const response = await api.get("/listagemMaisConsumidosProdutosOuServicos");
            setMaisConsum(response.data);
        }
        loadUsuarios();
    }, []);

    const geralMaiorConsum = maisConsum.map((prodServ) =>
        <Li key={prodServ.nome}>
            • {prodServ.nome}
        </Li>
    )


    
    // 10 clientes que menos consumiram produtos e serviços em quantidade

    const [menorConsumo, setMenorConsumo] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {
            const response = await api.get("/listagemPorMenorQtnd");
            setMenorConsumo(response.data);
        }
        loadUsuarios();
    }, []);

    const clienteMenorConsum = menorConsumo.map((cliente) =>
        <Li key={cliente.nome}>
            • {cliente.nome}
        </Li>
    )



    // 5 clientes que mais consumiram em valor

    const [maiorConsumValor, setMaiorConsumValor] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {
            const response = await api.get("/listagem5MaisConsumiramValor");
            setMaiorConsumValor(response.data);
        }
        loadUsuarios();
    }, []);

    const consumValor = maiorConsumValor.map(item => 
        <li key={item.nome} style={{paddingTop: '20px'}}>
            • {item.nome}
        </li>
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
                    
                    <Titulo>10 clientes que mais consumiram produtos e serviços, em quantidade</Titulo>

                    <div>
                        <ul>
                            {listagemPorQtnd}
                        </ul>
                    </div>
                    
                    <Titulo>Lista dos produtos ou serviços mais consumidos por gênero</Titulo>

                    <DivMascFem>

                        {/* Masculino */}
                        <div>
                            <Subtitulo>Masculino</Subtitulo>
                            <ul style={{paddingTop: '20px'}}>
                                {consumoM}
                            </ul>
                        </div>

                        <div>
                            {/* Feminino */}
                            <Subtitulo>Feminino</Subtitulo>
                            <ul style={{paddingTop: '20px'}}>
                                {consumoF}
                            </ul>
                        </div>

                    </DivMascFem>
                    
                    <Titulo>Listagem geral dos serviços ou produtos mais consumidos</Titulo>

                    <div>
                        <ul>
                            {geralMaiorConsum}
                        </ul>
                    </div>
                    
                    <Titulo>10 clientes que menos consumiram produtos e serviços em quantidade</Titulo>

                    <div>
                        <ul>
                            {clienteMenorConsum}
                        </ul>
                    </div>
                    
                    <Titulo>5 clientes que mais consumiram em valor</Titulo>

                    <div>
                        <ul style={{paddingBottom: '60px'}}>
                            {consumValor}
                        </ul>
                    </div>

                </div>
            </DivGeral>
        </>
    )

}

export default Listagens;