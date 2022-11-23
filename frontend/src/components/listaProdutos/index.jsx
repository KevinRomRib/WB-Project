import { React, useEffect, useState }from "react";
import { Link } from "react-router-dom"
import api from '../../services/api'

// Importando botão de exluir
import Excluir from './modalRemoverProduto/abrir'

// Importando styles
import { Ul, Li, Nome, DivOpcoes, Icone, DivNomePreco } from './style'

function ListaProdutos() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {
            const response = await api.get("/produtos");
            console.log(response.data);
            setProdutos(response.data);
        }
        loadUsuarios();
    }, []);

    const listProducts = produtos.map((produto) =>                 
    <Li key={produto.nome}>
        <DivNomePreco>
            <Nome>{produto.nome}</Nome>
            <Nome>{produto.preco}</Nome>
        </DivNomePreco>
        <DivOpcoes>
            <Link to={`/produto/modificar/${produto.id}`}>
                <Icone><ion-icon name="create-outline"></ion-icon></Icone>
            </Link>
            <Link to={`/produto/excluir/${produto.id}`}>
                <Excluir />
            </Link>
        </DivOpcoes>
    </Li>)

    return (
        <> 
            <Ul>
                {listProducts}
            </Ul>
        </>
    )

}

export default ListaProdutos;