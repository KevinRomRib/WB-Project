import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "./cadastro";
import { lista } from "../../listas/clientes"
import Telefone from "../../modelo/telefone";
import RG from "../../modelo/rg";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\n`);
        console.log(`\nInício do cadastro do cliente`);
        console.log(`\n`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let genero = this.entrada.receberTexto(`Por favor informe seu gênero (M / F): `);
        let rg = this.entrada.receberTexto(`Por favor informe seu rg: `);
        let dataEmissaoRgJunta = this.entrada.receberTexto(`Por favor informe a data de emissao do rg: `);
        let telefoneDDD = this.entrada.receberTexto(`Por favor informe seu telefone (DDD): `);
        let telefoneNumero = this.entrada.receberTexto(`Por favor informe seu telefone (Numero): `);

        // tratando data cpf
        let partesDataCpf = data.split('/')
        let anoCpf = new Number(partesDataCpf[2].valueOf()).valueOf()
        let mesCpf = new Number(partesDataCpf[1].valueOf()).valueOf()
        let diaCpf = new Number(partesDataCpf[0].valueOf()).valueOf()
        let dataEmissaoCpf = new Date(anoCpf, mesCpf, diaCpf)
        let cpf = new CPF(valor, dataEmissaoCpf);
        
        // tratando data rg
        let partesDataRg = dataEmissaoRgJunta.split('/')
        let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
        let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
        let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
        let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
        let rgs = new RG(rg, dataEmissaoRg)


        let telefone = new Telefone(telefoneDDD, telefoneNumero)
        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rgs, telefone);
        this.clientes.push(cliente)

        console.log(`\nCadastro concluído :)\n`);
        console.log(`\n`);
    }
    public cadastrarLista(): void {
        lista.forEach(lista => {
            let nome = lista.nome
            let nomeSocial = lista.nomeSocial
            let valor = lista.cpf
            let data = lista.dataEmissaoCpf
            let genero = lista.genero
            let valorRg = lista.rg
            let dataEmissaoLista = lista.dataEmissao
            let telefoneDDD = lista.telefoneDDD
            let telefoneNumero = lista.telefoneNumero

            let partesData = data.split('/')
            let ano = new Number(partesData[2].valueOf()).valueOf()
            let mes = new Number(partesData[1].valueOf()).valueOf()
            let dia = new Number(partesData[0].valueOf()).valueOf()
            let dataEmissaoCpf = new Date(ano, mes, dia)
            let cpf = new CPF(valor, dataEmissaoCpf);

            let telefone = new Telefone(telefoneDDD, telefoneNumero)
            let dataRg = new Date(dataEmissaoLista)
            let rg = new RG(valorRg, dataRg)

            let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefone);
            this.clientes.push(cliente)
        });
    }
}