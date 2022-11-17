import Cliente from "../modelo/cliente"

export default class ListagemGeneroConsumo {
    private clientes: Array<Cliente>
    
    constructor(clientes: Array<Cliente>){
        this.clientes = clientes
    }

    public listarMaiorPorGenero(): void {

        let produtoCliente: any = [];
        let produtoClienteMF: any = [];
        
        console.log(`Produtos mais consumidos por gênero`);

        console.log(`\n--------------------------------------\n`);

        console.log('=-=-=-=-=-=');
        console.log(`Masculino`);
        console.log('=-=-=-=-=-=');

        var mas = this.clientes.filter(item => item.genero == 'M')
        produtoCliente.push(mas)
        mas.map( cli => {
            cli.getProdutosConsumidos.forEach(prod => {
                let nome = prod.nome
                let genero = cli.genero 
                let quantidade = produtoCliente[prod.nome] = ( produtoCliente[prod.nome] || 0 ) + 1
                produtoClienteMF.push({
                    nomePro: nome,
                    genero: genero,
                    quantidade: quantidade
                })
            });
        })
        
        let pegandoMaiorM = produtoClienteMF[produtoClienteMF.length-1]

        console.log(`\n`)
        console.log(`Produto: ` + pegandoMaiorM.nomePro)
        console.log(`Quantidade: ` + pegandoMaiorM.quantidade)
            


        console.log(`\n--------------------------------------\n`);
            
        console.log('=-=-=-=-=-=');
        console.log(`Feminino`);
        console.log('=-=-=-=-=-=');

        var mas = this.clientes.filter(item => item.genero == 'F')
        produtoCliente.push(mas)
        mas.map( cli => {
            cli.getProdutosConsumidos.forEach(prod => {
                let nome = prod.nome
                let genero = cli.genero 
                let quantidade = produtoCliente[prod.nome] = ( produtoCliente[prod.nome] || 0 ) + 1
                produtoClienteMF.push({
                    nomePro: nome,
                    genero: genero,
                    quantidade: quantidade
                })
            });
        })
        
        let pegandoMaiorF = produtoClienteMF[produtoClienteMF.length-1]
    
        console.log(`\n`)
        console.log(`Produto: ` + pegandoMaiorF.nomePro)
        console.log(`Quantidade: ` + pegandoMaiorF.quantidade)
            
        console.log(`\n--------------------------------------\n`);
            
    }
}
            