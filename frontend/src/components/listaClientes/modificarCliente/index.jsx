import React from "react";
import { useForm } from "react-hook-form";
import api from "../../../services/api";
import { useNavigate, useParams, Link } from 'react-router-dom';

// Importando styles
import { DivLabelInput, DivGeral, DivButton, DivSubmit } from './style'

function ModificarCliente() {

    const FindId = useParams();
    const idUsuario = new Number(FindId.id)

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = async data => {
    api.patch(`/clientes/modificar/${idUsuario}`, {
        nome: data.nome,
        nomeSocial: data.nomeSocial,
        cpf: data.cpf,
        rg: data.rg,
        telefone: data.telefone,
        genero: data.genero,
      });
      navigate('/');
    }

    return (
        <>
            <DivGeral>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Link to={`/cliente/modificar/rg/${idUsuario}`}>Adiocionar novo RG</Link>
                        <Link to={`/cliente/modificar/telefone/${idUsuario}`}>Adiocionar novo Telefone</Link>
                    </div>
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
                        <label htmlFor="rg">RG</label>
                        <input type="text" name="rg" required  {...register("rg", { required: true })}  />
                    </DivLabelInput>
                    <DivLabelInput>
                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" name="telefone" required  {...register("telefone", { required: true })}  />
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

export default ModificarCliente;