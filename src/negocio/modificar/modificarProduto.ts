import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";

export default class ModificarProduto {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>) {
        this.produtos = produto
        this.entrada = new Entrada()
    }

    public mod(): void {
     
        console.log(`\nModificar Produtos:`);
        let novoNome = this.entrada.receberTexto(`Insira o nome do Produto: `)
        console.log(`--------------------------------------`);
        this.produtos.forEach(mod => {
            let alvo = mod.nome
            if (alvo == novoNome) {
                var nome = mod.nome
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
                        mod.nome = this.entrada.receberTexto(`Digite um novo nome: `)    
                    break;

                    case 2:
                        mod.valor = this.entrada.receberTexto(`Digite um novo valor: `)    
                    break;

                    case 0:
                        console.log(`Até mais`)
                        break;
                }
                console.log(`---- Produto alterado com sucesso ----`);
                console.log(`\n`);
            }
        })
    }
}