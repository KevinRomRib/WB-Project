import {ClienteModel} from "../database/models/modelo";

export interface IClienteAtributes{
    nome: string;
    nomeSocial: string;
    cpf?: number;
    rg?: number;
    telefone?: number;
    genero?: string;

}

export interface IClienteUpdate{
    nome: string;
    nomeSocial: string;
    cpf?: number;
    rg?: number;
    telefone?: number;
    genero?: string;
}


export class ClienteRepository{
    async findAll() {
        const clientes = await ClienteModel.findAll();
        return clientes;
    }

    async findOne(id: number | string) {
        const cliente = await ClienteModel.findOne({ where: {id} });
        return cliente
    }

    async create(data: IClienteAtributes) {
        const { nome, nomeSocial, cpf, rg, telefone, genero } = data;
        const cliente = await ClienteModel.create({
            nome,
            nomeSocial,
            cpf,
            rg,
            telefone,
            genero
        });
        return cliente
    }

    async update(id:number | string, data: IClienteAtributes) {
        const cliente = await ClienteModel.update({
            data
        }, {where: {id} });
        return cliente;
    }

    async delete(id:number | string) {
        await ClienteModel.destroy({where: {id}});
    }

}