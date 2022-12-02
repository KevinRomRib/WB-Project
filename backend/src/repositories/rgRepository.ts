import RgModel from "../database/models/rg";


export interface IRGAtributes{
    id_do_rg?: number
    id_do_cliente_proprietario: number;
    numero_rg: number,
    data_de_emissao;


}

export interface IRGUpdate{
    id_do_rg?: number
    id_do_cliente_proprietario?: number;
    numero_rg: number,
    data_de_emissao;
}


export class RgRepository{
    async findAll() {
        const rgs = await RgModel.findAll();
        return rgs;
    }

    async findOne(id_do_cliente_proprietario: number | string) {
        const rg = await RgModel.findOne({ where: {id_do_cliente_proprietario} });
        return rg
    }

    async create(data: IRGAtributes) {
        const {id_do_rg, id_do_cliente_proprietario, numero_rg, data_de_emissao} = data;
        const rg = await RgModel.create({
            id_do_rg,
            id_do_cliente_proprietario,
            numero_rg,
            data_de_emissao
        });
        return rg
    }

    async update(id_do_rg:number | string, data: IRGAtributes) {
        const rg = await RgModel.update(
            data
        , {where: {id_do_rg} });
        return rg;
    }

    async delete(id_do_rg:number | string) {
        await RgModel.destroy({where: {id_do_rg}});
    }

}