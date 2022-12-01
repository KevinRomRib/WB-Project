import TelefoneModel from "../database/models/telefone";

export interface ITelefoneAtributes{
    id_do_telefone?: number
    id_do_cliente_proprietario: number;
    numero: number,


}

export interface ITelefoneUpdate{
    id_do_telefone?: number
    id_do_cliente_proprietario: number;
    numero: number,
}


export class TelefoneRepository{
    async findAll() {
        const telefones = await TelefoneModel.findAll();
        return telefones;
    }

    async findOne(id_do_tel: number | string) {
        const telefone = await TelefoneModel.findOne({ where: {id_do_tel} });
        return telefone
    }

    async create(data: ITelefoneAtributes) {
        const {id_do_telefone, id_do_cliente_proprietario, numero} = data;
        const telefone = await TelefoneModel.create({
            id_do_telefone,
            id_do_cliente_proprietario,
            numero,
        });
        return telefone
    }

    async update(id_do_tel:number | string, data: ITelefoneAtributes) {
        const telefone = await TelefoneModel.update(
            data
        , {where: {id_do_tel} });
        return telefone;
    }

    async delete(id_do_tel:number | string) {
        await TelefoneModel.destroy({where: {id_do_tel}});
    }

}