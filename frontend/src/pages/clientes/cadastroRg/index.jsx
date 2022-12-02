import api from "../../../services/api";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';

// Importando styles
import { DivLabelInput, DivGeral, DivButton, DivSubmit, DivListaRgs } from './style'

var rgs = []
function CadRG() {

    const FindId = useParams();
    const idUsuario = new Number(FindId.id)

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = async data => {
      console.log(data);
      await api.post('/rg', {
        id_do_cliente_proprietario: idUsuario,
        numero_rg: data.numero_rg,
        data_de_emissao: data.data_de_emissao
      });
      navigate('/');
    };    
    

    return (
        <>
            <DivGeral>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <DivLabelInput>
                        <label htmlFor="numero_rg">RG</label>
                        <input type="text" name="numero_rg" required  {...register("numero_rg", { required: true })}  />
                    </DivLabelInput>
                    <DivLabelInput>
                        <label htmlFor="data_de_emissao">Data Emissão</label>
                        <input type="text" name="data_de_emissao" required  {...register("data_de_emissao", { required: true })}  />
                    </DivLabelInput>
                    <DivSubmit>
                        <DivButton type="submit">Enviar</DivButton>
                    </DivSubmit>
                </form>
            </DivGeral>
        </>
    )

}

export default CadRG;