import Cliente from "../../modelo/cliente";
import Entrada from "../../io/entrada";

export default class DeletarCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public del(): void {     
        console.log(`\nDeletar Cliente:`);
        let novoCpf = this.entrada.receberTexto(`Insira o cpf do Cliente: `)
        console.log(`--------------------------------------`);
        this.clientes.forEach(mod => {
            let alvo = mod.getCpf.getValor
            if (alvo == novoCpf) {
                var nome = mod.nome
                var nomeSocial = mod.nomeSocial
                var cpf = mod.getCpf.getValor
                var dataEmissaoCpf = mod.getCpf.getDataEmissao
                var genero = mod.genero
                var rgNumero = mod.getRgs.getValor
                var rgData = mod.getRgs.getDataEmissao
                var telefoneDDD = mod.getTelefones.getDDD
                var telefoneNumero = mod.getTelefones.getNumero
                console.log(`\n`);
                console.log(`Nome: ` + nome);
                console.log(`Nome social: ` + nomeSocial);
                console.log(`CPF: ` + cpf);
                console.log(`Data de Emissão de CPF: ` + dataEmissaoCpf);
                console.log(`Gênero: ` + genero);
                console.log(`RG: ` + rgNumero);
                console.log(`Data Emissão RG: ` + rgData);
                console.log(`Telefone (DDD): ` + telefoneDDD);
                console.log(`Telefone (Número): ` + telefoneNumero);
                console.log(`\n`);
                console.log(`--------------------------------------`);
                console.log(`\n`);
                console.log(`Você tem certeza disso?`);
                console.log(`\n`);
                console.log(`1 - Sim`);
                console.log(`2 - Não`);
                console.log(`0 - Sair`);
                console.log(`\n`);
                let opcaoCliente = this.entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (opcaoCliente) {
                    case 1:
                        var posicao = 0
                        for(var i=0; i <= this.clientes.length; i++) {
                            var del = this.clientes[i];
                            if(del.getCpf.getValor != mod.getCpf.getValor) {
                                posicao = posicao + 1;
                            } else {
                                break;
                            }
                        }
                        this.clientes.splice(posicao, 1)
                        break;
                        case 2:
                        console.log(`Até mais`)
                        break;

                    case 0:
                        console.log(`Até mais`)
                        break;
                }

                console.log(`\n`);
                console.log(`---- Cliente Deletado com sucesso ----`);
                console.log(`\n`);
            }
        })


    }
}