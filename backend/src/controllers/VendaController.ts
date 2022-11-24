import { Request, Response} from "express";
import { VendaRepository } from "../repositories/vendaRepository";

interface IVendaController {
    create: (req: Request, res: Response) => Promise<Response>;

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

  
}

export default new VendaController(new VendaRepository);