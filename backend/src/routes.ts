import express from "express";
import ClienteController from "./controllers/ClienteController";
import ProdutoController from "./controllers/ProdutoController";
import ServicoController from "./controllers/ServicoController";

export const router = express.Router();

router.post("/clientes", ClienteController.create);
router.get("/clientes", ClienteController.findAll);
router.get("/clientes/:id", ClienteController.findOne);
router.patch("/clientes/:id", ClienteController.update);
router.delete("/clientes/:id", ClienteController.delete);


router.post("/produtos", ProdutoController.create);
router.get("/produtos", ProdutoController.findAll);
router.get("/produtos/:id", ProdutoController.findOne);
router.patch("/produtos/:id", ProdutoController.update);
router.delete("/produtos/:id", ProdutoController.delete);


router.post("/servicos", ServicoController.create);
router.get("/servicos", ServicoController.findAll);
router.get("/servicos/:id", ServicoController.findOne);
router.patch("/servicos/:id", ServicoController.update);
router.delete("/servicos/:id", ServicoController.delete);
