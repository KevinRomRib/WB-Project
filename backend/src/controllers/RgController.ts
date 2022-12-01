import { Request, Response} from "express";
import { RgRepository } from "../repositories/rgRepository"


interface IRGController{
    create: (req: Request, res: Response) => Promise<Response>;
    findAll: (req: Request, res: Response) => Promise<Response>;
    findOne: (req: Request, res: Response) => Promise<Response>;
    update: (req: Request, res: Response) => Promise<Response>;
    delete: (req: Request, res: Response) => Promise<Response>;
}


export class RGController implements IRGController{
    private rgRepository: RgRepository
    constructor(rgRepository: RgRepository ) {
        this.rgRepository = rgRepository;
    }

    async create(req: Request, res: Response) {
        const rgRepository = new RgRepository();
        const rg = await rgRepository.create(req.body)
        return res.status(201).json(rg)

    };

    async findAll(req: Request, res:Response) {
        try {
            const rgRepository = new RgRepository();
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
        const rgRepository = new RgRepository();
        const rg = await rgRepository.findOne(id);
        return rg
          ? res.status(200).json(rg)
          : res.status(404).send("RG Não encontrado")
      };

    

      async update(req: Request, res: Response) {
        const { id } = req.params;
        const rgRepository = new RgRepository();
        await rgRepository.update(id, req.body);
        return res.status(200).send("RG atualizado com sucesso");
      };
  
      async delete(req: Request, res: Response) {
        const { id } = req.params;
        const rgRepository = new RgRepository();
        await rgRepository.delete(id);
        return res.status(204).send("RG deletado com sucesso");
      };
}

export default new RGController(new RgRepository);