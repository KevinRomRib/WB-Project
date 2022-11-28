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
