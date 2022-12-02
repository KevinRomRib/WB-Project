import { DataTypes } from "sequelize";
import db from "../config";

const ClienteModel = db.define("clientes", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nomeSocial: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true,
    },
    numero_rg:{
        type: DataTypes.STRING
    },

    data_de_emissao:{
        type: DataTypes.DATE
    },
    numero_de_telefone:{
        type: DataTypes.STRING
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


export default ClienteModel