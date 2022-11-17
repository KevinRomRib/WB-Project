import Entrada from "../../io/entrada";
import Cadastro from "./cadastro";
import Produto from "../../modelo/produto";
import {listaProduto} from "../../listas/produtos" 

export default class CadastroProduto extends Cadastro {
    public produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de Produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do Produto: `)
        let valor = this.entrada.receberTexto(`Por favor informe o valor do Produto: `)
        let produto = new Produto(nome, valor);
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`);
    }
    public cadastrarListaProdutos(): void {
        listaProduto.forEach(lista => {
            let nome = lista.nome
            let valor = lista.valor
            let produto = new Produto(nome, valor);
            this.produtos.push(produto)
        })
    }
}