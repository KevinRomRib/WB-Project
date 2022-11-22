import React from "react";

// Importando styles
import { DivLabelInput, DivGeral, DivButton, DivSubmit } from './style'

function ModificarServico() {
    return (
        <>
            <DivGeral>
                <form action="">
                    <DivLabelInput>
                        <label htmlFor="">Nome</label>
                        <input type="text" required />
                    </DivLabelInput>
                    <DivLabelInput>
                        <label htmlFor="">Valor</label>
                        <input type="text" required />
                    </DivLabelInput>
                    <DivSubmit>
                        <DivButton type="submit">Enviar</DivButton>
                    </DivSubmit>
                </form>
            </DivGeral>
        </>
    )

}

export default ModificarServico;