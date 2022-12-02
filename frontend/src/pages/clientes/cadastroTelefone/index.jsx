import api from "../../../services/api";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';

// Importando styles
import { DivLabelInput, DivGeral, DivButton, DivSubmit, DivListaRgs } from './style'

var rgs = []
function CadTel() {

    const FindId = useParams();
    const idUsuario = new Number(FindId.id)

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = async data => {
      console.log(data);
      await api.post('/telefone', {
        id_do_cliente_proprietario: idUsuario,
        numero: data.numero
      });
      navigate('/');
    };    
    

    return (
        <>
            <DivGeral>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <DivLabelInput>
                        <label htmlFor="numero">Telefone</label>
                        <input type="text" name="numero" required  {...register("numero", { required: true })}  />
                    </DivLabelInput>
                    <DivSubmit>
                        <DivButton type="submit">Enviar</DivButton>
                    </DivSubmit>
                </form>
            </DivGeral>
        </>
    )

}

export default CadTel;