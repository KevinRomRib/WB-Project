import Cadastro from "./cadastro/cadastro";
import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";
import ListagemServicos from "./listagem/listagemServico";
import ListagemProdutos from "./listagem/listagemProduto";
import ListagemClientes from "./listagem/listagemClientes";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Entrada from "../io/entrada";

export default class RealizarPedido extends Cadastro{
    public clientes: Array<Cliente>
    public produtos: Array<Produto>
    public servicos: Array<Servico>

    constructor(empresa:Empresa){
        super()
        this.clientes = empresa.getClientes
        this.produtos = empresa.getProdutos
        this.servicos = empresa.getServicos
    }

    adicionarPedido(){
        if(this.clientes.length){
            this.cadastrar()
        }else{
            console.log('\nNenhum Cliente Cadastrado')
        }
    }
                
    selectCliente(){
        let listarCli = new ListagemClientes(this.clientes)
        listarCli.listar()
        let entrada = new Entrada()
        let cpf = entrada.receberTexto(`Digite o CPF do cliente: `)
        let cliente = this.clientes.find( c => cpf === c.getCpf.getValor)
        return cliente
    }

    listProd():Produto{
        let listaProdutos = new ListagemProdutos(this.produtos)
        listaProdutos.listar()
        let entrada = new Entrada()
        let produto = entrada.receberTexto(`Insira o nome do produto: `)
        let prodEscolhido:Produto = this.produtos.find(p => produto == p.nome) as Produto
        return prodEscolhido
    }

    selectProduto(){
        let entrada = new Entrada()
        let produtos: Array<Produto> = []
        let addmore: boolean = true;
        do{
            let compra = entrada.receberTexto(`Deseja comprar um produto ? [ SIM / NAO ] `)
            if( compra.toLocaleUpperCase() === 'SIM' ){
                let produto:Produto = this.listProd()
                produtos.push(produto)
                break;
            }else{
                addmore = false
            }
        }while(addmore)
        
        return produtos
    }

    listServico(){
        let listagemServ = new ListagemServicos(this.servicos)
        listagemServ.listar()
        let entrada = new Entrada()
        let servico = entrada.receberTexto(`Insira o codigo do servico: `)
        let servEscolhido:Servico = this.servicos.find( s => servico == s.servico) as Servico
        return servEscolhido
    }

    selectServico(){
        let entrada = new Entrada()
        let servicos: Array<Servico> = []
        let addmore: boolean = true;
        
        do{
            let comprea = entrada.receberTexto(`Deseja um serviço ? [ SIM / NAO ] `)
            if( comprea.toLocaleUpperCase() === 'SIM' ){
                let servico:Servico = this.listServico()
                servicos.push(servico)
                break;
            }else{
                addmore = false
            }
        } while(addmore)
        
        return servicos
    }

    public cadastrar(): void {
        const cliente = this.selectCliente()

        if(this.produtos.length){
            const produtos = this.selectProduto()
            cliente?.getProdutosConsumidos.push(...produtos)
        }

        if(this.servicos.length ){
            const servicos = this.selectServico()
            cliente?.getServicosConsumidos.push(...servicos)
        }

    }
}