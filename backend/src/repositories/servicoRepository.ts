import {ServicoModel} from "../database/models/modelo";

export interface IServicoAtributes{
    id?: string | number
    nome: string;
    preco: number;


}

export interface IServicoUpdate{
    id?: string | number
    nome: string;
    preco: number;
}


export class ServicoRepository{
    async findAll() {
        const servicos = await ServicoModel.findAll();
        return servicos;
    }

    async findOne(id: number | string) {
        const servico = await ServicoModel.findOne({ where: {id} });
        return servico
    }

    async create(data: IServicoAtributes) {
        const { id, nome, preco} = data;
        const servico = await ServicoModel.create({
            id,
            nome,
            preco,
        });
        return servico
    }

    async update(id:number | string, data: IServicoAtributes) {
        const servico = await ServicoModel.update(
            data
        , {where: {id} });
        return servico;
    }

    async delete(id:number | string) {
        await ServicoModel.destroy({where: {id}});
    }

}