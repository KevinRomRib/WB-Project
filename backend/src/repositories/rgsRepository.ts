import RgModel from "../database/models/rgs";


export interface IRGsAtributes{
    id_do_cliente_proprietario: number
    rg_numero: number
    data_emissao: Date

}

export interface IRgsUpdate{
    id_do_cliente_proprietario: number
    rg_numero: number
    data_emissao: Date
}


export class RgsRepository{
    async findAll() {
        const rgs = await RgModel.findAll();
        return rgs;
    }

    async findOne(id: number | string) {
        const rg = await RgModel.findOne({ where: {id} });
        return rg
    }

    async create(data: IRGsAtributes) {
        const { id_do_cliente_proprietario, rg_numero, data_emissao} = data;
        const rg = await RgModel.create({
            id_do_cliente_proprietario,
            rg_numero,
            data_emissao
        });
        return rg
    }

    async update(id:number | string, data: IRGsAtributes) {
        const rg = await RgModel.update(
            data
        , {where: {id} });
        return rg;
    }

    async delete(id:number | string) {
        await RgModel.destroy({where: {id}});
    }

}