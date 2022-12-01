import { DataTypes } from "sequelize";
import db from "../config";

import ClienteModel from "./cliente";

export const RgModel = db.define("rgs", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // id_do_rg: {
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true
    // },
    // id_do_cliente_proprietario: {
    //     type: DataTypes.INTEGER,
    // },
    // rg_numero: {
    //     type: DataTypes.INTEGER,
    // },
    // data_emissao: {
    //     type: DataTypes.DATE
    // }

});

// RgModel.belongsTo(ClienteModel,{foreignKey:'id_do_cliente_proprietario'})
// ClienteModel.hasMany(RgModel,{foreignKey:'id_do_cliente_proprietario'})

export default RgModel