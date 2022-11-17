export default class Telefone {
    private ddd: string
    private numero: string
    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }

    public get getDDD(): string {
        return this.ddd
    }

    public get getNumero(): string {
        return this.numero
    }
    public mudaDDD(novoDDD:string) {
        this.ddd = novoDDD
    }
    public mudaNumero(numero:string) {
        this.numero = numero
    }
}