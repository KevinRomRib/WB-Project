import React from "react";
import { Link } from "react-router-dom"

// Importando styles
import { DivLabelInput, DivGeral, DivButton, DivSubmit } from './style'

function Pedido() {

    return (
        <>
            <DivGeral>
                <form action="">
                    <DivLabelInput>
                        <label htmlFor="" >CPF do Cliente *</label>
                        <input type="text" required />
                    </DivLabelInput>
                    <DivLabelInput>
                        <label htmlFor="">Nome do Produto</label>
                        <input type="text" />
                    </DivLabelInput>
                    <DivLabelInput>
                        <label htmlFor="">Nome do Serviço</label>
                        <input type="text" />
                    </DivLabelInput>
                    <DivSubmit>
                        <Link to={'/'}>
                            <DivButton type="submit">Enviar</DivButton>
                        </Link>
                    </DivSubmit>
                </form>
            </DivGeral>
        </>
    )

}

export default Pedido;