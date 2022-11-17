import Produto from "../../modelo/produto";
import Entrada from "../../io/entrada";

export default class DeletarServico {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>) {
        this.produtos = produto
        this.entrada = new Entrada()
    }

    public del(): void {     
        console.log(`\nDeletar Produto:`);
        let novoNome = this.entrada.receberTexto(`Insira o nome do Produto: `)
        console.log(`--------------------------------------`);
        this.produtos.forEach(mod => {
            let alvo = mod.nome
            if (alvo == novoNome) {
                var nome = mod.nome
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
                        for(var i=0; i <= this.produtos.length; i++) {
                            var del = this.produtos[i];
                            if(del.nome != mod.nome) {
                                posicao = posicao + 1;
                            } else {
                                break;
                            }
                        }
                        this.produtos.splice(posicao, 1)
                        break;
                    case 2:
                        console.log(`Até mais`)
                        break;

                    case 0:
                        console.log(`Até mais`)
                        break;
                }

                console.log(`\n`);
                console.log(`---- Produto Deletado com sucesso ----`);
                console.log(`\n`);
            }
        })


    }
}