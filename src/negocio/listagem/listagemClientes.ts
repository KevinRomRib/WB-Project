import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\nLista de todos os Clientes:`);
        console.log(`\n`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Gênero: ` + cliente.genero);
            console.log(`RG: ` + cliente.getRgs.getValor);
            console.log(`Telefone: (` + cliente.getTelefones.getDDD + `) ` + cliente.getTelefones.getNumero);
            console.log(`--------------------------------------`);
        console.log(`\n`);
        })
    }
}