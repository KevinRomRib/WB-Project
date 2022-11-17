import Servico from "../../modelo/servico";
import Entrada from "../../io/entrada";

export default class DeletarProduto {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        this.servicos = servico
        this.entrada = new Entrada()
    }

    public del(): void {     
        console.log(`\nDeletar Serviço:`);
        let novoNome = this.entrada.receberTexto(`Insira o nome do Serviço: `)
        console.log(`--------------------------------------`);
        this.servicos.forEach(mod => {
            let alvo = mod.servico
            if (alvo == novoNome) {
                var nome = mod.servico
                var valor = mod.valor
                console.log(`\n`);
                console.log(`Nome: ` + nome);
                console.log(`Valor: ` + valor);
                console.log(`\n`);
                console.log(`--------------------------------------`);
                console.log(`\n`);
                console.log(`Você tem certeza disso?`);
                console.log(`\n`);
                console.log(`1 - Sim`);
                console.log(`2 - Não`);
                console.log(`0 - Sair`);
                console.log(`\n`);
                let opcaoProduto = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
                
                switch (opcaoProduto) {
                    case 1:
                        var posicao = 0
                        for(var i=0; i <= this.servicos.length; i++) {
                            var del = this.servicos[i];
                            if(del.servico != mod.servico) {
                                posicao = posicao + 1;
                            } else {
                                break;
                            }
                        }
                        this.servicos.splice(posicao, 1)
                        break;
                    case 2:
                        console.log(`Até mais`)
                        break;

                    case 0:
                        console.log(`Até mais`)
                        break;
                }

                console.log(`\n`);
                console.log(`---- Serviço Deletado com sucesso ----`);
                console.log(`\n`);
            }
        })


    }
}