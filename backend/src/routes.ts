import express from "express";
import ClienteController from "./controllers/ClienteController";


export const router = express.Router();

router.post("/clientes", ClienteController.create);
router.get("/clientes", ClienteController.findAll);
router.get("/clientes/:id", ClienteController.findOne);
router.patch("/clientes/:id", ClienteController.update);
router.delete("/clientes/:id", ClienteController.delete);

