import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastro/cadastroCliente";
import CadastroProduto from "../negocio/cadastro/cadastroProduto";
import CadastroServico from "../negocio/cadastro/cadastroServico";
import ClientesMaiorConsumoQnt from "../negocio/clientesMaiorConsumoQnt";
import DeletarCliente from "../negocio/deletar/deletarCliente";
import DeletarProduto from "../negocio/deletar/deletarProduto";
import ListagemClientes from "../negocio/listagem/listagemClientes";
import ListagemPeloGenero from "../negocio/listagemGenero";
import ListagemProduto from "../negocio/listagem/listagemProduto";
import ListagemServico from "../negocio/listagem/listagemServico"
import ListaMaiorConsumo from "../negocio/maisConsumidos";
import ListagemGeneroConsumo from "../negocio/maisConsumidosGenero";
import ModificarCliente from "../negocio/modificar/modificarCliente";
import ModificarProduto from "../negocio/modificar/modificarProduto";
import RealizarPedido from "../negocio/pedidos";
import ModificarServico from "../negocio/modificar/modificarServico";
import DeletarServico from "../negocio/deletar/deletarServico";
import ClientesMenorConsumoQnt from "../negocio/clientesMenorConsumoQnt";
import ClientesMenorConsumoValor from "../negocio/clientesMaiorConsumoValor";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

// Cadastro e Listagem de Clientes
let cadastroAutomatico = new CadastroCliente(empresa.getClientes)
cadastroAutomatico.cadastrarLista();

// Cadastro e Listagem de Produtos
let cadastroAutomaticoProduto = new CadastroProduto(empresa.getProdutos)
cadastroAutomaticoProduto.cadastrarListaProdutos();

// Cadastro e Listagem de Servicos
let cadastroAutomaticoServico = new CadastroServico(empresa.getServicos)
cadastroAutomaticoServico.cadastrarListaServicos();

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Menu cliente`);
    console.log(`2 - Menu produtos`);
    console.log(`3 - Menu serviços `);
    console.log(`4 - Menu listas `);
    console.log(`5 - Fazer um pedido`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    console.log(`\n`);

    switch (opcao) {
        case 1:

            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Listar clientes`);
            console.log(`3 - Modificar clientes`);
            console.log(`4 - Deletar clientes`);
            console.log(`0 - Sair`);


            let opcaoCliente = entrada.receberNumero(`Por favor, escolha uma opção: `)
            console.log(`\n`);

            switch (opcaoCliente) {
                case 1:
                    let cadastro = new CadastroCliente(empresa.getClientes)
                    cadastro.cadastrar()
                    break;
                
                case 2:
                    let listagem = new ListagemClientes(empresa.getClientes)
                    listagem.listar()
                    break;
                
                case 3:
                    let modificar = new ModificarCliente(empresa.getClientes)
                    modificar.mod()
                    break;

                case 4:
                    let deletar = new DeletarCliente(empresa.getClientes)
                    deletar.del()
                    break;

                case 0:
                    execucao = false
                    console.log(`Até mais`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break;

        case 2:

            console.log(`1 - Cadastrar produto`);
            console.log(`2 - Listar produtos`);
            console.log(`3 - Modificar produtos`);
            console.log(`4 - Deletar produtos`);
            console.log(`0 - Sair`);

            let opcaoProduto = entrada.receberNumero(`Por favor, escolha uma opção: `)
            console.log(`\n`);

            switch (opcaoProduto) {

                case 1:
                    let cadastro = new CadastroProduto(empresa.getProdutos)
                    cadastro.cadastrar()

                case 2:
                    let listagem = new ListagemProduto(empresa.getProdutos)
                    listagem.listar()
                    break;

                case 3:
                    let modificar = new ModificarProduto(empresa.getProdutos)
                    modificar.mod()
                    break;

                case 4:
                    let deletar = new DeletarProduto(empresa.getProdutos)
                    deletar.del()
                    break;
                
                case 0:
                    execucao = false
                    console.log(`Até mais`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break;

        case 3:

            console.log(`1 - Cadastrar serviços`);
            console.log(`2 - Listar serviços`);
            console.log(`3 - Modificar serviços`);
            console.log(`4 - Deletar serviços`);
            console.log(`0 - Sair`);

            let opcaoServico = entrada.receberNumero(`Por favor, escolha uma opção: `)
            console.log(`\n`);

            switch (opcaoServico) {
                case 1:
                    let cadastro = new CadastroServico(empresa.getServicos)
                    cadastro.cadastrar()
                    break;

                case 2:
                    let listagem = new ListagemServico(empresa.getServicos)
                    listagem.listar()
                    break;

                case 3:
                    let modificar = new ModificarServico(empresa.getServicos)
                    modificar.mod()
                    break;

                case 4:
                    let deletar = new DeletarServico(empresa.getServicos)
                    deletar.del()
                    break;

                case 0:
                    execucao = false
                    console.log(`Até mais`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break;

        case 4:

            console.log(`1 - Lista dos clientes por gênero`);
            console.log(`2 - Lista dos produtos mais consumidos`);
            console.log(`3 - Lista dos produtos mais consumidos por gênero`);
            console.log(`4 - 10 clientes que mais consumiram produtos em quantidade`);
            console.log(`5 - 10 clientes que menos consumiram produtos em quantidade`);
            console.log(`6 - 5 clientes que mais consumiram em valor`);
            console.log(`\n`);


            let opcaoLista = entrada.receberNumero(`Por favor, escolha uma opção: `)
            console.log(`\n`);

            switch (opcaoLista) {
                
                case 1:
                    let listagemGenero = new ListagemPeloGenero(empresa.getClientes)
                    listagemGenero.listarGenero()
                    break;

                case 2:
                    let produtosMaisConsumidos = new ListaMaiorConsumo(empresa.getClientes)
                    produtosMaisConsumidos.maiorConsumo()
                    break;

                case 3:
                    let produtosMaisConsumidosPorGenero = new ListagemGeneroConsumo(empresa.getClientes)
                    produtosMaisConsumidosPorGenero.listarMaiorPorGenero()
                    break;
                    
                case 4:
                    let clientesMaiorConsumoQnt = new ClientesMaiorConsumoQnt(empresa)
                    clientesMaiorConsumoQnt.maiorConsumo()
                    break;

                case 5:
                    let clientesMenorConsumoQnt = new ClientesMenorConsumoQnt(empresa)
                    clientesMenorConsumoQnt.menorConsumo()
                    break;

                case 6:
                    let clientesMaiorConsumoValor = new ClientesMenorConsumoValor(empresa.getClientes)
                    clientesMaiorConsumoValor.valorConsumo()
                    break;

                case 0:
                    execucao = false
                    console.log(`Até mais`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break;
        
        case 5:
            let pedido = new RealizarPedido(empresa)
            pedido.adicionarPedido()
            break;

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}