import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";

export default class ModificarServico {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        this.servicos = servico
        this.entrada = new Entrada()
    }

    public mod(): void {
     
        console.log(`\nModificar Serviços:`);
        let novoNome = this.entrada.receberTexto(`Insira o nome do Serviço: `)
        console.log(`--------------------------------------`);
        this.servicos.forEach(mod => {
            let alvo = mod.servico
            if (alvo == novoNome) {
                var nome = mod.servico
                var valor = mod.valor
                console.log(`\n`);
                console.log(`Nome atual: ` + nome);
                console.log(`Valor atual: ` + valor);
                console.log(`\n`);
                console.log(`--------------------------------------`);
                console.log(`\n`);
                console.log(`1 - Alterar nome`);
                console.log(`2 - Alterar valor`);
                console.log(`0 - Sair`);

                let opcaoCliente = this.entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (opcaoCliente) {
                    case 1:
                        mod.servico = this.entrada.receberTexto(`Digite um novo nome: `)    
                    break;

                    case 2:
                        mod.valor = this.entrada.receberTexto(`Digite um novo valor: `)    
                    break;

                    case 0:
                        console.log(`Até mais`)
                        break;
                }
                console.log(`---- Serviço alterado com sucesso ----`);
                console.log(`\n`);
            }
        })
    }
}