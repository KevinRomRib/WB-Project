import { Sequelize } from "sequelize";
import ClienteModel from "../database/models/cliente";
import ProdutoModel from "../database/models/produto";
import ServicoModel from "../database/models/servico";
import PedidoModel from "../database/models/pedido";


export const listagemConsumoPorQntd = async (req, res) => {
    console.log('cheguei aqui antes')
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
            c.dataValues.pedidos.forEach(p=>{
                if(p.dataValues.id_do_servico) t++
                if(p.dataValues.id_do_produto) t++
            })
            delete c.dataValues.pedidos
            return{...c.dataValues, t}
        }).sort((a,b)=>b.t-a.t).slice(0,10)

        res.status(201).json(clientes)
    } catch(error){
        res.status(500).json({message:error})
    }
}