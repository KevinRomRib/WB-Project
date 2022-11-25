import { Request, Response} from "express";
import { VendaRepository } from "../repositories/vendaRepository";

interface IVendaController {
    create: (req: Request, res: Response) => Promise<Response>;
    findAll: (req: Request, res: Response) => Promise<Response>;
    findOne: (req: Request, res: Response) => Promise<Response>;
    update: (req: Request, res: Response) => Promise<Response>;
    delete: (req: Request, res: Response) => Promise<Response>;

}


export class VendaController implements IVendaController{
    private vendaRepository: VendaRepository
    constructor(vendaRepository: VendaRepository ) {
        this.vendaRepository = vendaRepository;
    }

    async create(req: Request, res: Response) {
        const vendaRepository = new VendaRepository();
        const venda = await vendaRepository.create(req.body)
        return res.status(201).json(venda)

    };

    async findAll(req: Request, res:Response) {
        try {
            const vendaRepository = new VendaRepository();
            const vendas = await vendaRepository.findAll();
            return vendas.length > 0
              ? res.status(200).json(vendas)
              : res.status(404).send("Nenhuma venda encontrada");
          } catch (err) {
            console.log(err);
          }
    };

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const vendaRepository = new VendaRepository();
        const venda = await vendaRepository.findOne(id);
        return venda
          ? res.status(200).json(venda)
          : res.status(404).send("Venda Não encontrada")
      };



      async update(req: Request, res: Response) {
        const { id } = req.params;
        const vendaRepository = new VendaRepository();
        await vendaRepository.update(id, req.body);
        return res.status(200).send("Venda atualizada com sucesso");
      };
  
      async delete(req: Request, res: Response) {
        const { id } = req.params;
        const vendaRepository = new VendaRepository();
        await vendaRepository.delete(id);
        return res.status(204).send("Venda deletada com sucesso");
      };

  
}

export default new VendaController(new VendaRepository);