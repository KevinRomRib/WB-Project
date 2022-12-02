import React from "react";
import { useForm } from "react-hook-form";
import api from "../../../services/api"
import { useNavigate } from 'react-router-dom';

// Importando styles
import { DivLabelInput, DivGeral, DivButton, DivSubmit } from './style'

function CadastroCliente() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async data => {
      console.log(data);
      await api.post('/clientes', {
        nome: data.nome,
        nomeSocial: data.nomeSocial,
        cpf: data.cpf,
        numero_rg: data.numero_rg,
        data_de_emissao: data.data_de_emissao,
        numero_de_telefone: data.numero_de_telefone,
        genero: data.genero,
      });
      navigate('/');
    };

    return (
        <>
            <DivGeral>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <DivLabelInput>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" required {...register("nome", { required: true })} />
                    </DivLabelInput>
                    <DivLabelInput>
                        <label htmlFor="nomeSocial">Nome Social</label>
                        <input type="text" name="nomeSocial"  required  {...register("nomeSocial", { required: true })}  />
                    </DivLabelInput>
                    <DivLabelInput>
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" name="cpf" required  {...register("cpf", { required: true })}  />
                    </DivLabelInput>
                    <DivLabelInput>
                        <label htmlFor="numero_rg">RG</label>
                        <input type="text" name="numero_rg" required  {...register("numero_rg", { required: true })}  />
                    </DivLabelInput>
                    <DivLabelInput>
                        <label htmlFor="data_de_emissao">Data Emissão</label>
                        <input type="text" name="data_de_emissao" placeholder="aaaa-mm-dd" required  {...register("data_de_emissao", { required: true })}  />
                    </DivLabelInput>
                    <DivLabelInput>
                        <label htmlFor="numero_de_telefone">Telefone</label>
                        <input type="tel" name="numero_de_telefone" required  {...register("numero_de_telefone", { required: true })}  />
                    </DivLabelInput>
                    <DivLabelInput>
                        <label htmlFor="genero">Genero</label>
                        <select id="genero" name="genero" required  {...register("genero", { required: true })} >
                            <option disabled selected></option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </select>
                    </DivLabelInput>
                    <DivSubmit>
                        <DivButton type="submit">Enviar</DivButton>
                    </DivSubmit>
                </form>
            </DivGeral>
        </>
    )

}

export default CadastroCliente;