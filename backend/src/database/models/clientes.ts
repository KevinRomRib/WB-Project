import { DataTypes } from "sequelize";
import db from "../config";

export const ClienteModel = db.define("clientes", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nomeSocial: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        primaryKey: true,
        type: DataTypes.NUMBER,
        allowNull: false, 
        unique: true,
    },
    rg: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    telefone: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    }
});