import { Request, Response} from "express";

import {RgsRepository} from "../repositories/rgsRepository"

interface IRGsController {
    create: (req: Request, res: Response) => Promise<Response>;
    findAll: (req: Request, res: Response) => Promise<Response>;
    findOne: (req: Request, res: Response) => Promise<Response>;
    update: (req: Request, res: Response) => Promise<Response>;
    delete: (req: Request, res: Response) => Promise<Response>;
}


export class RGsController implements IRGsController{
    private rgRepository: RgsRepository
    constructor(rgRepository: RgsRepository ) {
        this.rgRepository = rgRepository;
    }

    async create(req: Request, res: Response) {
      try{
        const rgRepository = new RgsRepository();
        const rg = await rgRepository.create(req.body)
        return res.status(201).json(rg)
      }
      catch(error) {
        console.log(error)
      }
    };

    async findAll(req: Request, res:Response) {
        try {
            const rgRepository = new RgsRepository();
            const rgs = await rgRepository.findAll();
            return rgs.length > 0
              ? res.status(200).json(rgs)
              : res.status(404).send("Nenhum RG encontrado");
          } catch (err) {
            console.log(err);
          }
    };

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const rgRepository = new RgsRepository();
        const rg = await rgRepository.findOne(id);
        return rg
          ? res.status(200).json(rg)
          : res.status(404).send("RG Não encontrado")
      };

    

      async update(req: Request, res: Response) {
        const { id } = req.params;
        const rgRepository = new RgsRepository();
        await rgRepository.update(id, req.body);
        return res.status(200).send("RG atualizado com sucesso");
      };

      async delete(req: Request, res: Response) {
        const { id } = req.params;
        const rgRepository = new RgsRepository();
        await rgRepository.delete(id);
        return res.status(204).send("RG deletado com sucesso");
      };
}

export default new RGsController(new RgsRepository);