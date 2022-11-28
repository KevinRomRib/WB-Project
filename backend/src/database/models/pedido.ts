import { DataTypes } from "sequelize";
import db from "../config";

import ClienteModel from "./cliente";




export const PedidoModel = db.define("vendas", {
    id_da_venda: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    id_do_cliente:{
        type: DataTypes.INTEGER
    },

    id_do_produto:{
        type: DataTypes.INTEGER
    },

    id_do_servico:{
        type: DataTypes.INTEGER
    },
})

PedidoModel.belongsTo(ClienteModel,{foreignKey:'id_do_cliente'})
ClienteModel.hasMany(PedidoModel,{foreignKey:'id_do_cliente'})


export default PedidoModel