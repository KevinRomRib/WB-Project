import Servico from "../../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServico extends Listagem {
    public servicos: Array<Servico>
    constructor(servico: Array<Servico>) {
        super()
        this.servicos = servico
    }

    public listar(): void {
        console.log(`\nLista de todos os Produtos:`);
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.servico);
            console.log(`Valor: ` + servico.valor);
            console.log(`--------------------------------------`);
        console.log(`\n`);
        })
    }
}