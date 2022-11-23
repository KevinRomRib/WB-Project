import React from "react";
import { useForm } from "react-hook-form";
import api from "../../../services/api"
import { useNavigate, useParams } from 'react-router-dom';

// Importando styles
import { DivLabelInput, DivGeral, DivButton, DivSubmit } from './style'

function ModificarProduto() {

    const FindId = useParams();
    const idUsuario = new String(FindId.id)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async data => {
    api.patch(`/produtos/modificar/${idUsuario}`, {
        nome: data.nome,
        preco: data.preco
      });
      navigate('/produtos');
    }

    return (
        <>
           <DivGeral>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <DivLabelInput>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" required {...register("nome", { required: true })} />
                    </DivLabelInput>
                    <DivLabelInput>
                        <label htmlFor="preco">Valor</label>
                        <input type="text" name="preco" required {...register("preco", { required: true })} />
                    </DivLabelInput>
                    <DivSubmit>
                        <DivButton type="submit">Enviar</DivButton>
                    </DivSubmit>
                </form>
            </DivGeral>
        </>
    )

}

export default ModificarProduto;