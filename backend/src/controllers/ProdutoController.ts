import { Request, Response} from "express";
import { ProdutoRepository } from "../repositories/produtoRepository";


interface IProdutoController {
    create: (req: Request, res: Response) => Promise<Response>;
    findAll: (req: Request, res: Response) => Promise<Response>;
    findOne: (req: Request, res: Response) => Promise<Response>;
    update: (req: Request, res: Response) => Promise<Response>;
    delete: (req: Request, res: Response) => Promise<Response>;
}


export class ProdutoController implements IProdutoController{
    private produtoRepository: ProdutoRepository
    constructor(produtoRepository: ProdutoRepository ) {
        this.produtoRepository = produtoRepository;
    }

    async create(req: Request, res: Response) {
        const produtoRepository = new ProdutoRepository();
        const produto = await produtoRepository.create(req.body)
        return res.status(201).json(produto)

    };

    async findAll(req: Request, res:Response) {
        try {
            const produtoRepository = new ProdutoRepository();
            const produtos = await produtoRepository.findAll();
            return produtos.length > 0
              ? res.status(200).json(produtos)
              : res.status(404).send("Nenhum produto encontrado");
          } catch (err) {
            console.log(err);
          }
    };

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const produtoRepository = new ProdutoRepository();
        const produto = await produtoRepository.findOne(id);
        return produto
          ? res.status(200).json(produto)
          : res.status(404).send("Produto Não encontrado")
      };

    

      async update(req: Request, res: Response) {
        const { id } = req.params;
        const clienteRepository = new ProdutoRepository();
        await clienteRepository.update(id, req.body);
        return res.status(200).send("Produto atualizado com sucesso");
      };
  
      async delete(req: Request, res: Response) {
        const { id } = req.params;
        const produtoRepository = new ProdutoRepository();
        await produtoRepository.delete(id);
        return res.status(204).send("Produto deletado com sucesso");
      };
}

export default new ProdutoController(new ProdutoRepository);