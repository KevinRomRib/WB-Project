import {PedidoModel} from "../database/models/modelo";

export interface IVendaAtributes{
    id_da_venda: string | number
    id_do_cliente: string | number
    id_do_produto: string | number
    id_do_servico: string | number
}

export interface IVendaUpdate{
    id_da_venda: string | number
    id_do_cliente: string | number
    id_do_produto: string | number
    id_do_servico: string | number
}


export class VendaRepository{

    async findAll() {
        const vendas = await PedidoModel.findAll();
        return vendas;
    }

    async findOne(id: number | string) {
        const venda = await PedidoModel.findOne({ where: {id} });
        return venda
    }

    async create(data: IVendaAtributes) {
        const { id_da_venda, id_do_cliente, id_do_produto, id_do_servico} = data;
        const venda = await PedidoModel.create({
            id_da_venda,
            id_do_cliente,
            id_do_produto,
            id_do_servico
            
        });
        return venda
    }

    async update(id:number | string, data: IVendaAtributes) {
        const venda = await PedidoModel.update(
            data
        , {where: {id} });
        return venda;
    }

    async delete(id:number | string) {
        await PedidoModel.destroy({where: {id}});
    }


}