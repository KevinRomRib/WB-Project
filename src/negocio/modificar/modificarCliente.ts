import Cliente from "../../modelo/cliente";
import Entrada from "../../io/entrada";

export default class ModificarCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public mod(): void {
     
        console.log(`\nModificar Cliente:`);
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
                console.log(`Nome atual: ` + nome);
                console.log(`Nome social atual: ` + nomeSocial);
                console.log(`CPF atual: ` + cpf);
                console.log(`Data de Emissão de CPF  atual: ` + dataEmissaoCpf);
                console.log(`Gênero: ` + genero);
                console.log(`RG: ` + rgNumero);
                console.log(`Data Emissão RG: ` + rgData);
                console.log(`Telefone (DDD): ` + telefoneDDD);
                console.log(`Telefone (Número): ` + telefoneNumero);
                console.log(`\n`);
                console.log(`--------------------------------------`);
                console.log(`\n`);
                console.log(`1 - Alterar nome`);
                console.log(`2 - Alterar nome social`);
                console.log(`3 - Alterar CPF`);
                console.log(`4 - Alterar data de emissão do CPF`);
                console.log(`5 - Alterar gênero`);
                console.log(`6 - Alterar RG`);
                console.log(`7 - Alterar data emissão RG`);
                console.log(`8 - Alterar DDD`);
                console.log(`9 - Alterar numero de telefone`);
                console.log(`0 - Sair`);

                let opcaoCliente = this.entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (opcaoCliente) {
                    case 1:
                        mod.nome = this.entrada.receberTexto(`Digite um novo nome: `)    
                    break;

                    case 2:
                        mod.nomeSocial = this.entrada.receberTexto(`Digite um novo nome social: `)    
                    break;

                    case 3:
                        mod.getCpf.mudaCPF(this.entrada.receberTexto(`Digite um novo CPF: `))  
                    break;

                    case 4:
                        let data = new Date(this.entrada.receberTexto(`Digite uma nova data: `))
                        mod.getCpf.mudaDataEmissao(data)  
                    break;

                    case 5:
                        mod.genero = this.entrada.receberTexto(`Digite um novo genêro [M / F]: `)    
                    break;

                    case 6:
                        mod.getRgs.mudaRG(this.entrada.receberTexto(`Digite um novo RG: `))  
                    break;

                    case 7:
                        let dataEmissaoRg = new Date(this.entrada.receberTexto(`Digite uma nova data: `))
                        mod.getRgs.mudaDataEmissao(dataEmissaoRg)  
                    break;

                    case 8:
                        mod.getTelefones.mudaDDD(this.entrada.receberTexto(`Digite um novo DDD: `))  
                    break;

                    case 9:
                        mod.getTelefones.mudaNumero(this.entrada.receberTexto(`Digite um novo numero: `))  
                    break;

                    case 0:
                        console.log(`Até mais`)
                        break;
                }
                console.log(`---- Cliente alterado com sucesso ----`);
                console.log(`\n`);
            }
        })
    }
}