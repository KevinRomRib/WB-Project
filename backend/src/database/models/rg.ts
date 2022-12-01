import { DataTypes } from "sequelize";
import db from "../config";

import ClienteModel from "./cliente";




export const RgModel = db.define("rg", {
    id_do_rg: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    id_do_cliente_proprietario:{
        type: DataTypes.INTEGER
    },

    numero_rg:{
        type: DataTypes.INTEGER
    },

    data_de_emissao:{
        type: DataTypes.DATE
    }

})

RgModel.belongsTo(ClienteModel,{foreignKey:'id_do_cliente_proprietario'})
ClienteModel.hasMany(RgModel,{foreignKey:'id_do_cliente_proprietario'})


export default RgModel