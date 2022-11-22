import { React, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom"
import api from "../../../services/api";
import Nav from "../../../components/nav";

// Importando styles
import { DivLabelInput, DivGeral, Div } from './style'

// Importando GlobalStyle
import GlobalStyle from "./globalStyle";

function ClienteInfo() {

    const FindId = useParams();
    const idUsuario = new Number(FindId.id)

    const [clientes, setClientes] = useState([]);

    useEffect(() => {

        async function loadClientes() {

            const response = await api.get(`/clientes/${idUsuario}`);
            setClientes(response.data);

        }
        loadClientes();
    }, []);

    return (
        <>
            <GlobalStyle/>

            <Nav/>

            <DivGeral>
                <div>
                    <DivLabelInput>
                        <p className="primeiro">Nome</p>
                        <div>
                            <p className="segundo">{clientes.nome}</p>
                        </div>
                    </DivLabelInput>
                    <DivLabelInput>
                        <p className="primeiro">NomeSocial</p >
                        <div>
                            <p className="segundo">{clientes.nomeSocial}</p>
                        </div>
                    </DivLabelInput>
                    <DivLabelInput>
                        <p className="primeiro">CPF</p>
                        <div>
                            <p className="segundo">{clientes.cpf}</p>
                        </div>
                    </DivLabelInput>
                    <DivLabelInput>
                        <p className="primeiro">RG</p>
                        <div>
                            <p className="segundo">{clientes.rg}</p>
                        </div>
                    </DivLabelInput>
                    <DivLabelInput>
                        <p className="primeiro">Telefone</p>
                        <div>
                            <p className="segundo">{clientes.telefone}</p>
                        </div>
                    </DivLabelInput>
                    <DivLabelInput>
                        <p className="primeiro">Gênero</p>
                        <div>
                            <p className="segundo">{clientes.genero}</p>
                        </div>
                    </DivLabelInput>
                </div>
            </DivGeral>
        </>
    )

}

export default ClienteInfo;