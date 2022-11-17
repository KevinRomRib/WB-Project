import Produto from "../../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProduto extends Listagem {
    public produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }

    public listar(): void {
        console.log(`\nLista de todos os Produtos:`);
        console.log(`\n`);
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: ` + produto.valor);
            console.log(`--------------------------------------`);
        console.log(`\n`);
        })
    }
}