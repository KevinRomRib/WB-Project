import React from "react";
import { useForm } from "react-hook-form";
import api from "../../../services/api"
import { useNavigate } from 'react-router-dom';

// Importando styles
import { DivLabelInput, DivGeral, DivButton, DivSubmit } from './style'

function CadastroProduto() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async data => {
      console.log(data);
      await api.post('/produtos', {
        nome: data.nome,
        preco: data.valor
      });
      navigate('/produtos');
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
                        <label htmlFor="valor">Valor</label>
                        <input type="text" name="valor" required {...register("valor", { required: true })} />
                    </DivLabelInput>
                    <DivSubmit>
                        <DivButton type="submit">Enviar</DivButton>
                    </DivSubmit>
                </form>
            </DivGeral>
        </>
    )

}

export default CadastroProduto;