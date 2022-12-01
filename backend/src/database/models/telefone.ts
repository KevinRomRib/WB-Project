import { DataTypes } from "sequelize";
import db from "../config";

import ClienteModel from "./cliente";




export const TelefoneModel = db.define("telefone", {
    id_do_telefone: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    id_do_cliente_proprietario:{
        type: DataTypes.INTEGER
    },

    numero:{
        type: DataTypes.INTEGER
    }
})

TelefoneModel.belongsTo(ClienteModel,{foreignKey:'id_do_cliente_proprietario'})
ClienteModel.hasMany(TelefoneModel,{foreignKey:'id_do_cliente_proprietario'})


export default TelefoneModel