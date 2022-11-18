import { Request, Response} from "express";

import { ClienteModel } from "../database/models/clientes";

interface IClienteController {
    create: (req: Request, res: Response) => Promise<Response>;
    findAll: (req: Request, res: Response) => Promise<Response>;
    findOne: (req: Request, res: Response) => Promise<Response>;
    update: (req: Request, res: Response) => Promise<Response>;
    delete: (req: Request, res: Response) => Promise<Response>;
}


class ClienteController implements IClienteController { 
    async create(req: Request, res: Response) {
        const { nome, nomeSocial, cpf, rg, telefone, genero } = req.body;
        const cliente = await ClienteModel.create({
            nome,
            nomeSocial,
            cpf,
            rg,
            telefone,
            genero
        });
        return res.status(201).json(cliente)
    };


    async findAll(req: Request, res: Response){
        const clientes = await ClienteModel.findAndCountAll({});
        return clientes.rows.length>0
        ? res.status(200).json(clientes)
        : res.status(404).send("Nenhum Cliente Encontrado");
    };

    async findOne(req: Request, res:Response) {
        const { cpf } = req.params;
        const cliente = await ClienteModel.findOne({where: {cpf} });
        return cliente
        ? res.status(200).json(cliente)
        : res.status(404).send("Cliente não encontrado")
    };

    async update(req: Request, res: Response) {
        const { cpf } = req.params;
        const { nome, nomeSocial, rg, telefone, genero } = req.body;
        await ClienteModel.update({
          nome,
          nomeSocial,
          rg,
          telefone,
          genero
        }, { where: { cpf } });
        return res.status(200).send("Cliente atualizado com sucesso");
      };

      async delete(req: Request, res: Response) {
        const { cpf } = req.params;
        await ClienteModel.destroy({ where: { cpf } })
        return res.status(204).send("Cliente deletado com sucesso");
      };
}

export default new ClienteController();