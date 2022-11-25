import { Request, Response} from "express";
import { ServicoRepository } from "../repositories/servicoRepository";


interface IServicoController {
    create: (req: Request, res: Response) => Promise<Response>;
    findAll: (req: Request, res: Response) => Promise<Response>;
    findOne: (req: Request, res: Response) => Promise<Response>;
    update: (req: Request, res: Response) => Promise<Response>;
    delete: (req: Request, res: Response) => Promise<Response>;
}


export class ServicoController implements IServicoController{
    private servicoRepository: ServicoRepository
    constructor(servicoRepository: ServicoRepository ) {
        this.servicoRepository = servicoRepository;
    }

    async create(req: Request, res: Response) {
        const servicoRepository = new ServicoRepository();
        const servico = await servicoRepository.create(req.body)
        return res.status(201).json(servico)

    };

    async findAll(req: Request, res:Response) {
        try {
            const servicoRepository = new ServicoRepository();
            const servicos = await servicoRepository.findAll();
            return servicos.length > 0
              ? res.status(200).json(servicos)
              : res.status(404).send("Nenhum serviço encontrado");
          } catch (err) {
            console.log(err);
          }
    };

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const servicoRepository = new ServicoRepository();
        const servico = await servicoRepository.findOne(id);
        return servico
          ? res.status(200).json(servico)
          : res.status(404).send("Serviço Não encontrado")
      };

    

      async update(req: Request, res: Response) {
        const { id } = req.params;
        const servicoRepository = new ServicoRepository();
        await servicoRepository.update(id, req.body);
        return res.status(200).send("Serviço atualizado com sucesso");
      };

      async delete(req: Request, res: Response) {
        const { id } = req.params;
        const servicoRepository = new ServicoRepository();
        await servicoRepository.delete(id);
        return res.status(204).send("Serviço deletado com sucesso");
      };
}

export default new ServicoController(new ServicoRepository);