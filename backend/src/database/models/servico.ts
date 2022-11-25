import { DataTypes } from "sequelize";
import db from "../config";

import PedidoModel from "./pedido";


export const ServicoModel = db.define("servicos", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

PedidoModel.belongsTo(ServicoModel,{foreignKey:"id_do_servico"})




export default ServicoModel