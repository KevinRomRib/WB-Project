import { DataTypes } from "sequelize";
import db from "../config";

import PedidoModel from "./pedido";

const ProdutoModel = db.define("produtos", {
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
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

PedidoModel.belongsTo(ProdutoModel,{foreignKey: 'id_do_produto'});
ProdutoModel.hasMany(PedidoModel,{foreignKey:'id_do_produto'})



export default ProdutoModel