import { DataTypes } from "sequelize";
import db from "../config";


export const ClienteModel = db.define("clientes", {
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
    rg: {
        type: DataTypes.STRING,
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

export const ProdutoModel = db.define("produtos", {
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


// PedidoModel.belongsTo(ServicoModel,{foreignKey:'id_do_servico'});
// ServicoModel.PedidoModel = ServicoModel.hasMany(PedidoModel,{foreignKey:'id_do_servico'})
