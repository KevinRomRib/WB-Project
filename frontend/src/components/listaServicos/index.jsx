import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import api from '../../services/api'

// Importando botão de exluir
import Excluir from './modalRemoverServico/abrir'

// Importando styles
import { Ul, Li, Nome, DivOpcoes, Icone, DivNomePreco } from './style'

function ListaServico() {

    const [servicos, setServicos] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {
            const response = await api.get("/servicos");
            console.log(response.data);
            setServicos(response.data);
        }
        loadUsuarios();
    }, []);

    const listServices = servicos.map((servico) =>                 
    <Li key={servico.nome}>
        <DivNomePreco>
        <Nome>{servico.nome}</Nome>
        <Nome>{servico.preco}</Nome>
        </DivNomePreco>
        <DivOpcoes>
            <Link to={`/servico/modificar/${servico.id}`}>
                <Icone><ion-icon name="create-outline"></ion-icon></Icone>
            </Link>
            <Link to={`/servico/excluir/${servico.id}`}>
                <Excluir />
            </Link>
        </DivOpcoes>
    </Li>)

    return (
        <> 
            <Ul>
                {listServices}
            </Ul>
        </>
    )

}

export default ListaServico;