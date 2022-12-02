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

    const [rgs, setRgs] = useState([]);

    useEffect(() => {

        async function loadRgs() {

            const response = await api.get(`/rg`);
            setRgs(response.data);

        }
        loadRgs();
    }, []);
    
    var listaRgs = []
    const rgFilter = rgs.forEach(item => {
        if(item.id_do_cliente_proprietario == idUsuario) {
            listaRgs.push(item)
        }
    })

    const numeroRg = listaRgs.map((rg) => 
        <p key={rg} className="segundo">
            {rg.numero_rg}
        </p>
    )

    const dataEmissaoRg = listaRgs.map((data) => 
        <p key={data} className="segundo">
            {data.data_de_emissao}
        </p>
    )


    const [tels, setTels] = useState([]);

    useEffect(() => {

        async function loadTels() {

            const response = await api.get(`/telefone`);
            setTels(response.data);

        }
        loadTels();
    }, []);
    
    var listaTel = []

    const telFilter = tels.forEach(item => {
        if(item.id_do_cliente_proprietario == idUsuario) {
            listaTel.push(item)
        }
    })
    
    const numeroTel = listaTel.map((tel) => 
        <p key={tel} className="segundo">
            {tel.numero}
        </p>
    )



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
                            <p className="segundo">{clientes.numero_rg}</p>
                            {numeroRg}
                        </div>
                    </DivLabelInput>
                    <DivLabelInput>
                        <p className="primeiro">Data Emissão</p>
                        <div>
                            <p className="segundo">{clientes.data_de_emissao}</p>
                            {dataEmissaoRg}
                        </div>
                    </DivLabelInput>
                    <DivLabelInput>
                        <p className="primeiro">Telefone</p>
                        <div>
                            <p className="segundo">{clientes.numero_de_telefone}</p>
                            {numeroTel}
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