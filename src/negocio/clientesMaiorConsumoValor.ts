import Cliente from "../modelo/cliente"

export default class ClientesMenorConsumoValor {
    private clientes: Array<Cliente>
    constructor( cliente: Array<Cliente>){
        this.clientes = cliente
    }

    public valorConsumo(): void {
        let quantidadeConsumido: any = []
        this.clientes.forEach( cliente => {
            let nome = cliente.nome
            let consumoTotal : number=0

            cliente.getProdutosConsumidos.forEach((produto)=>{
                let valorNumber = Number(produto.valor)
                consumoTotal = consumoTotal + valorNumber
            })
            cliente.getServicosConsumidos.forEach((servico)=>{
                let valorNumber = Number(servico.valor)
                consumoTotal = consumoTotal + valorNumber
            })

            quantidadeConsumido.push({
                nome:nome,
                quantidade:consumoTotal
            })
        })

        quantidadeConsumido = quantidadeConsumido.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
          });
        quantidadeConsumido = quantidadeConsumido.slice(0, 5);

            console.log("Top 5 Clientes que mais consumiram (em valor): ");
            console.log("\n-------------------------------------------------------\n");
            quantidadeConsumido.forEach(cliente => {
                console.log("\n");
                console.log("Nome: " + cliente.nome);
                console.log(`Valor: R$ ${cliente.quantidade} reais`);
                console.log("\n");
                console.log(`-----------------------------------`);
            })
            console.log("\n");
    }
}