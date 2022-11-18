import express from "express";
import ClienteController from "./controllers/ClienteController";


const router = express.Router();

router.post("/clientes", ClienteController.create);
router.get("/clientes", ClienteController.findAll);
router.get("/clientes/:cpf", ClienteController.findOne);
router.patch("/clientes/:cpf", ClienteController.update);
router.delete("/clientes/:cpf", ClienteController.delete);

export { router };