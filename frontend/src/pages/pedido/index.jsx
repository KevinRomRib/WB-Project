import React from "react";
import api from "../../services/api";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

// Importando styles
import { DivLabelInput, DivGeral, DivButton, DivSubmit } from './style'

function Pedido() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = async data => {
      console.log(data);
      await api.post('/pedido/cadastrar', {
        id_do_cliente: data.id_cliente,
        id_do_produto: data.id_produto,
        id_do_servico: data.id_servico
      });
      navigate('/');
    };

    return (
        <>
            <DivGeral>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <DivLabelInput>
                        <label htmlFor="" >Id do Cliente *</label>
                        <input type="text" name="id_cliente" required {...register("id_cliente", { required: true })}/>
                    </DivLabelInput>
                    <DivLabelInput>
                        <label htmlFor="">Id do Produto</label>
                        <input type="text" name="id_produto"  {...register("id_produto", { required: false })} />
                    </DivLabelInput>
                    <DivLabelInput>
                        <label htmlFor="">Id do Serviço</label>
                        <input type="text" name="id_servico"  {...register("id_servico", { required: false })} />
                    </DivLabelInput>
                    <DivSubmit>
                        
                            <DivButton type="submit">Enviar</DivButton>
                       
                    </DivSubmit>
                </form>
            </DivGeral>
        </>
    )

}

export default Pedido;