import { Request, Response} from "express";
import { ClienteRepository } from "../repositories/clienteRepository";

interface IClienteController {
    create: (req: Request, res: Response) => Promise<Response>;
    findAll: (req: Request, res: Response) => Promise<Response>;
    findOne: (req: Request, res: Response) => Promise<Response>;
    update: (req: Request, res: Response) => Promise<Response>;
    delete: (req: Request, res: Response) => Promise<Response>;
}


export class ClienteController implements IClienteController{
    private clienteRepository: ClienteRepository
    constructor(clienteRepository: ClienteRepository ) {
        this.clienteRepository = clienteRepository;
    }

    async create(req: Request, res: Response) {
      try{
        const clienteRepository = new ClienteRepository();
        const cliente = await clienteRepository.create(req.body)
        return res.status(201).json(cliente)
      }
      catch(error) {
        console.log(error)
      }
    };

    async findAll(req: Request, res:Response) {
        try {
            const clienteRepository = new ClienteRepository();
            const clientes = await clienteRepository.findAll();
            return clientes.length > 0
              ? res.status(200).json(clientes)
              : res.status(404).send("Nenhum cliente encontrado");
          } catch (err) {
            console.log(err);
          }
    };

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const clienteRepository = new ClienteRepository();
        const cliente = await clienteRepository.findOne(id);
        return cliente
          ? res.status(200).json(cliente)
          : res.status(404).send("Cliente Não encontrado")
      };

    

      async update(req: Request, res: Response) {
        const { id } = req.params;
        const clienteRepository = new ClienteRepository();
        await clienteRepository.update(id, req.body);
        return res.status(200).send("Cliente atualizado com sucesso");
      };

      async delete(req: Request, res: Response) {
        const { id } = req.params;
        const clienteRepository = new ClienteRepository();
        await clienteRepository.delete(id);
        return res.status(204).send("Cliente deletado com sucesso");
      };
}

export default new ClienteController(new ClienteRepository);