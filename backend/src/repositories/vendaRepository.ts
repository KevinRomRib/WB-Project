import {VendaModel} from "../database/models/modelo";

export interface IVendaAtributes{
    id_da_venda?: string | number
    id_do_cliente?: string | number
    id_do_produto?: string | number
    id_do_servico?: string | number
}

export interface IVendaUpdate{
    id_da_venda?: string | number
    id_do_cliente?: string | number
    id_do_produto?: string | number
    id_do_servico?: string | number
}


export class VendaRepository{


    async create(data: IVendaAtributes) {
        const { id_da_venda, id_do_cliente, id_do_produto, id_do_servico} = data;
        const venda = await VendaModel.create({
            id_da_venda,
            id_do_cliente,
            id_do_produto,
            id_do_servico
        });
        return venda
    }


}