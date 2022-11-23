import {ProdutoModel} from "../database/models/modelo";

export interface IProdutoAtributes{
    id?: string | number
    nome: string;
    preco: number;


}

export interface IProcessoUpdate{
    id?: string | number
    nome: string;
    preco: number;
}


export class ProdutoRepository{
    async findAll() {
        const produtos = await ProdutoModel.findAll();
        return produtos;
    }

    async findOne(id: number | string) {
        const produto = await ProdutoModel.findOne({ where: {id} });
        return produto
    }

    async create(data: IProdutoAtributes) {
        const { id, nome, preco} = data;
        const produto = await ProdutoModel.create({
            id,
            nome,
            preco,
        });
        return produto
    }

    async update(id:number | string, data: IProdutoAtributes) {
        const produto = await ProdutoModel.update(
            data
        , {where: {id} });
        return produto;
    }

    async delete(id:number | string) {
        await ProdutoModel.destroy({where: {id}});
    }

}