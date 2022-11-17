import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";

export default class ClientesMenorConsumoQnt{
    private clientes: Array <Cliente>
    constructor(empresa:Empresa){
        this.clientes = empresa.getClientes
    }

    public menorConsumo(): void {
        let nome, consumoTotal, ordenacao
        let quantidadeConsumido: any  = []

        this.clientes.forEach( cliente => {
            nome = cliente.nome;
            consumoTotal = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            quantidadeConsumido.push({
                nome: nome,
                quantidade: consumoTotal
            });
        })

        ordenacao = quantidadeConsumido.sort((a, b) => {
            return b.quantidade - a.quantidade
        })
        
        ordenacao.reverse()
        ordenacao = ordenacao.slice(0,10)

        console.log(`\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`);
        console.log("10 clientes que menos consumiram produtos em quantidade");
        console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n`);

        ordenacao.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Quantidade de produtos consumidos: `+ cliente.quantidade);
            console.log(`\n--------------------------------------\n`);
        })
    }
}