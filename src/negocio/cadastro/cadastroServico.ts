import Entrada from "../../io/entrada";
import Cadastro from "./cadastro";
import Servico from "../../modelo/servico";
import { listaServicos } from "../../listas/servicos";


export default class CadastroServico extends Cadastro {
    public servicos: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super()
        this.servicos = servico
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de Produto`);
        let servico = this.entrada.receberTexto(`Por favor informe o nome do Serviço: `)
        let valor = this.entrada.receberTexto(`Por favor informe o valor do Serviço: `)
        let servicos = new Servico(servico, valor);
        this.servicos.push(servicos)
        console.log(`\nCadastro concluído :)\n`);
    }
    public cadastrarListaServicos(): void {
            listaServicos.forEach(cada => {
            let servico = cada.servico
            let valor = cada.valor
            let servicos = new Servico(servico, valor);
            this.servicos.push(servicos)
        })
    }
}