import Cliente from "../modelo/cliente";

export default class ListaMaiorConsumo {
    private clientes: Array<Cliente>
    constructor( clientes: Array<Cliente>){
        this.clientes = clientes
    }

    public maiorConsumo() {
        let produtoCliente: any = [];

        this.clientes.map( cli =>{
            cli.getProdutosConsumidos.forEach(prod => {
                let nome = prod.nome
                let qtd = produtoCliente[prod.nome] = ( produtoCliente[prod.nome] || 0 ) + 1
                produtoCliente.push({
                    nome: nome,
                    quantidade: qtd
                })
            });
        })
        
        let ordenado = produtoCliente.sort( (a: { quantidade: number; }, b: { quantidade: number; })  => {
            return b.quantidade - a.quantidade }).slice(0, 1)

            console.log(`\nProduto mais consumido`);

            console.log("-------------------------------------------------------")

            ordenado.forEach((consumidos: { nome: string, quantidade: string}) => {
            console.log(`Nome: ` + consumidos.nome);
            console.log(`Quantidade: ` + consumidos.quantidade);
            console.log(`\n`);
        })
    }
}