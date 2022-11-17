import Cliente from "../modelo/cliente";

export default class ListagemPeloGenero{
    private clientes:Array<Cliente>
    constructor(clientes: Array<Cliente>){
        this.clientes = clientes
    }

    public listarGenero(): void {
        let masculino: Cliente[] = [];
        let feminino: Cliente[] = [];

        this.clientes.forEach( clientes => {
            if( clientes.genero === 'M'){
                masculino.push(clientes)
            }
            if( clientes.genero === 'F'){
                feminino.push(clientes)
            }
        })       

        console.log('Listagem dos Clientes por Gênero');
        console.log(`------------------`);
        console.log('\n');

        console.log(`=-=-=-=-=-=-=`);
        console.log('Masculino:');
        console.log(`=-=-=-=-=-=-=`);

        console.log('\n');
        masculino.forEach(masculino=>{
            console.log(`Nome: ` + masculino.nome);
            console.log('\n');
        })
        console.log(`------------------`);
        console.log('\n');

        console.log(`=-=-=-=-=-=-=`);
        console.log('Feminino:');
        console.log(`=-=-=-=-=-=-=`);
        console.log('\n');
        feminino.forEach(feminino=>{
            console.log(`Nome: ` + feminino.nome);
            console.log('\n');
        })        
        console.log(`------------------`);
        console.log('\n');
    }
}