export default class Servico {
    public servico!: string
    public valor!: string
    constructor(servico: string, valor: string) {
        this.servico = servico
        this.valor = valor
    }
}