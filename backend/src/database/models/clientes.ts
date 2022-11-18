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
        type: DataTypes.INTEGER,
        allowNull: false, 
        unique: true,
    },
    rg: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    }
});