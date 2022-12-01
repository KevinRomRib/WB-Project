import { Request, Response} from "express";
import { TelefoneRepository } from "../repositories/telefoneRepository"


interface ITelefoneController{
    create: (req: Request, res: Response) => Promise<Response>;
    findAll: (req: Request, res: Response) => Promise<Response>;
    findOne: (req: Request, res: Response) => Promise<Response>;
    update: (req: Request, res: Response) => Promise<Response>;
    delete: (req: Request, res: Response) => Promise<Response>;
}


export class TelefoneController implements ITelefoneController{
    private telefoneRepository: TelefoneRepository
    constructor(telefoneRepository: TelefoneRepository ) {
        this.telefoneRepository = telefoneRepository;
    }

    async create(req: Request, res: Response) {
        const telefoneRepository = new TelefoneRepository();
        const telefone = await telefoneRepository.create(req.body)
        return res.status(201).json(telefone)

    };

    async findAll(req: Request, res:Response) {
        try {
            const telefoneRepository = new TelefoneRepository();
            const telefones = await telefoneRepository.findAll();
            return telefones.length > 0
              ? res.status(200).json(telefones)
              : res.status(404).send("Nenhum TELEFONE encontrado");
          } catch (err) {
            console.log(err);
          }
    };

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const telefoneRepository = new TelefoneRepository();
        const telefone = await telefoneRepository.findOne(id);
        return telefone
          ? res.status(200).json(telefone)
          : res.status(404).send("TELEFONE Não encontrado")
      };

    

      async update(req: Request, res: Response) {
        const { id } = req.params;
        const telefoneRepository = new TelefoneRepository();
        await telefoneRepository.update(id, req.body);
        return res.status(200).send("TELEFONE atualizado com sucesso");
      };
  
      async delete(req: Request, res: Response) {
        const { id } = req.params;
        const telefoneRepository = new TelefoneRepository();
        await telefoneRepository.delete(id);
        return res.status(204).send("TELEFONE deletado com sucesso");
      };
}

export default new TelefoneController(new TelefoneRepository);