import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import api from '../../services/api'
import Excluir from "../listaClientes/modalRemoverCliente/abrir";

// Importando styles
import { Ul, Li, Nome, DivOpcoes, Icone } from './style'

function ListaClientes() {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {
            const response = await api.get("/clientes");
            console.log(response.data);
            setClientes(response.data);
        }
        loadUsuarios();
    }, []);

    const listUsers = clientes.map((cliente) =>  
        <Li key={cliente.nome}>
                <Link style={{display: 'flex', width: '100%'}} to={`/cliente/${cliente.id}`}>                
                    <Nome>{cliente.nome}</Nome>
                </Link>
            <DivOpcoes>
                <Link to={`/cliente/modificar/${cliente.id}`}>
                    <Icone><ion-icon name="create-outline"></ion-icon></Icone>
                </Link>
                <Link to={`/cliente/excluir/${cliente.id}`}>
                    <Excluir />
                </Link>
            </DivOpcoes>
        </Li>
    )


    return (
        <> 
            <Ul>
                {listUsers}
            </Ul>
        </>
    )
}

export default ListaClientes;