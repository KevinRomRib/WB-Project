import { Sequelize } from "sequelize";
import ClienteModel from "../database/models/cliente";
import ProdutoModel from "../database/models/produto";
import ServicoModel from "../database/models/servico";
import PedidoModel from "../database/models/pedido";




// LISTAGEM DE QUEM MAIS COMPROU PRODUTO OU SERVICO POR QUANTIDADE.

export const listagemConsumoPorQntd = async (req, res) => {

    try{
        const dados = await ClienteModel.findAll({
            attributes:['id','nome','cpf'],
            include:{
                model:PedidoModel,
                attributes:['id_da_venda', 'id_do_cliente', 'id_do_produto', 'id_do_servico']
            }
        })
        

        const clientes = dados.map(c=>{
            let t = 0
            console.log(c)


            c.dataValues.vendas.forEach(p=>{
                console.log('CHEGUEI AQUI DEPOIS')
                if(p.dataValues.id_do_servico) t++
                if(p.dataValues.id_do_produto) t++
            })
            delete c.dataValues.vendas


            return{...c.dataValues, t}
        }).sort((a,b)=>b.t-a.t).slice(0,10)

        res.status(201).json(clientes)
    } catch(error){
        res.status(500).json({message:error})
    }
}





// LISTAGEM DE QUEM MENOS COMPROU PRODUTO OU SERVICO POR QUANTIDADE.


export const listagemConsumoPorMenorQntd = async (req, res) => {

    try{
        const dados = await ClienteModel.findAll({
            attributes:['id','nome','cpf'],
            include:{
                model:PedidoModel,
                attributes:['id_da_venda', 'id_do_cliente', 'id_do_produto', 'id_do_servico']
            }
        })
        

        const clientes = dados.map(c=>{
            let t = 0
            console.log(c)


            c.dataValues.vendas.forEach(p=>{
                console.log('CHEGUEI AQUI DEPOIS')
                if(p.dataValues.id_do_servico) t++
                if(p.dataValues.id_do_produto) t++
            })
            delete c.dataValues.vendas


            return{...c.dataValues, t}
        }).sort((a,b)=>a.t-b.t).slice(0,10)

        res.status(201).json(clientes)
    } catch(error){
        res.status(500).json({message:error})
    }
}


// LISTAGEM 5 CLIENTES QUE MAIS CONSUMIRAM EM VALOR, NÃO EM QUANTIDADE

export const listagem5clientesMaisConsumiramValor = async (req, res) => {
    try{
        const dados = await ClienteModel.findAll({
            attributes:['id','nome','cpf'],
            include:{
                model:PedidoModel,
                attributes:['id_da_venda', 'id_do_cliente', 'id_do_produto', 'id_do_servico'],
                include:[{
                    model:ProdutoModel,
                    attributes:['id', 'preco']
                },{
                    model:ServicoModel,
                    attributes:['id', 'preco']
                }]
            }
        })

        const clientes = dados.map(c=>{
            let t=0
            c.dataValues.vendas.forEach(p=>{
                if(p.dataValues.id_do_servico){
                    t +=p.dataValues.servico.preco
                }
                if(p.dataValues.id_do_produto){
                    t +=p.dataValues.produto.preco
                }
            })
            delete c.dataValues.vendas
            return { ...c.dataValues, t }
        }).sort((a,b)=>b.t-a.t).slice(0,5)

        res.status(201).json(clientes)
    } catch(error) {
        
        res.status(500).json({message:error})
    }
}





// LISTAGEM DOS SERVICOS OU PRODUTOS MAIS CONSUMIDOS

export const listagemMaisConsumidosProdutosOuServicos = async (req, res) => {
    try{
        const dados = await PedidoModel.findAll({
            attributes:['id_da_venda','id_do_produto', 'id_do_servico'],
            include:[{
                model: ProdutoModel,
                attributes:['id', 'nome']
            },{
                model: ServicoModel,
                attributes:['id', 'nome']
            }]
        })

        const filtro = dados.reduce((acc, cur) => {

            if(cur.dataValues?.id_do_produto){
                if(acc[`produto_${cur.dataValues.id_do_produto}`]){
                    acc[`produto_${cur.dataValues.id_do_produto}`].qtd++
                } else {
                    acc[`produto_${cur.dataValues.id_do_produto}`] = {qtd:1, ...cur.dataValues.produto.dataValues, tipo: 'Produto'}
                }
            }

            if(cur.dataValues?.id_do_servico){
                if(acc[`servico_${cur.dataValues.id_do_servico}`]){
                    acc[`servico_${cur.dataValues.id_do_servico}`].qtd++
                } else {
                    acc[`servico_${cur.dataValues.id_do_servico}`] = {qtd:1, ...cur.dataValues.servico.dataValues, tipo: 'Serviço'}
                }
            }
            return acc


        },{})

        let ordenado = Object.keys(filtro).map(a=>{
            return {...filtro[a]}
        }).sort((a,b) => b.qtd - a.qtd)

        res.status(201).json(ordenado)
    } catch (error) {
        res.status(500).json({message:error})
    }
}



// LISTAGEM DOS SERVICOS OU PRODUTOS MAIS CONSUMIDOS POR GENERO


export const listagemMaisConsumidosProdutosOuServicosPorGenero = async (req, res) => {
    try{
        const dados = await PedidoModel.findAll({
            include:[{
                model: ClienteModel,
                attributes:['id', 'nome', 'cpf', 'genero']
            },{
                model: ProdutoModel,
                attributes:['id', 'nome', 'preco']
            },{
                model: ServicoModel,
                attributes:['id', 'nome', 'preco']
            }]
        })

        const filtro = dados.reduce((acc, cur) => {

            if(cur.dataValues?.id_do_produto){
                if(acc[cur.dataValues.cliente.dataValues.genero][`produto_${cur.dataValues.id_do_produto}`]){
                    acc[cur.dataValues.cliente.dataValues.genero][`produto_${cur.dataValues.id_do_produto}`].qtd++
                } else {
                    acc[cur.dataValues.cliente.dataValues.genero][`produto_${cur.dataValues.id_do_produto}`] = {qtd:1, ...cur.dataValues.produto.dataValues, tipo: 'Produto'}
                }
            }

            if(cur.dataValues?.id_do_servico){
                if(acc[cur.dataValues.cliente.dataValues.genero][`servico_${cur.dataValues.id_do_servico}`]){
                    acc[cur.dataValues.cliente.dataValues.genero][`servico_${cur.dataValues.id_do_servico}`].qtd++
                } else {
                    acc[cur.dataValues.cliente.dataValues.genero][`servico_${cur.dataValues.id_do_servico}`] = {qtd:1, ...cur.dataValues.servico.dataValues, tipo: 'Serviço'}
                }
            }

            return acc


        },{M:{}, F:{}})

        let ordenadoM = Object.keys(filtro.M).map(a=>{
            return {...filtro.M[a]}
        }).sort((a,b) => b.qtd - a.qtd)

        let ordenadoF = Object.keys(filtro.F).map(a=>{
            return {...filtro.F[a]}
        }).sort((a,b) => b.qtd - a.qtd)

        res.status(201).json({ordenadoM, ordenadoF})
    } catch (error) {
        res.status(500).json({message:error})
    }
}