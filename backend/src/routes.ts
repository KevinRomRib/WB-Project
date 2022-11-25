import express from "express";
import ClienteController from "./controllers/ClienteController";
import ProdutoController from "./controllers/ProdutoController";
import ServicoController from "./controllers/ServicoController";
import VendaController from "./controllers/VendaController";



import { listagemConsumoPorQntd } from "./controllers/ListagensController";

export const router = express.Router();

router.post("/clientes", ClienteController.create);
router.get("/clientes", ClienteController.findAll);
router.get("/clientes/:id", ClienteController.findOne);
router.patch("/clientes/modificar/:id", ClienteController.update);
router.delete("/clientes/:id", ClienteController.delete);


router.post("/produtos", ProdutoController.create);
router.get("/produtos", ProdutoController.findAll);
router.get("/produtos/:id", ProdutoController.findOne);
router.patch("/produtos/modificar/:id", ProdutoController.update);
router.delete("/produtos/:id", ProdutoController.delete);


router.post("/servicos", ServicoController.create);
router.get("/servicos", ServicoController.findAll);
router.get("/servicos/:id", ServicoController.findOne);
router.patch("/servicos/modificar/:id", ServicoController.update);
router.delete("/servicos/:id", ServicoController.delete);


router.post("/pedido/cadastrar", VendaController.create);
router.get("/pedidos", VendaController.findAll);
router.get("/pedidos/:id", VendaController.findOne);



router.get('/listagemPorQtnd', listagemConsumoPorQntd)