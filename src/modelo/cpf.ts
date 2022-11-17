export default class CPF {
    private valor: string
    private dataEmissao: Date
    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor
        this.dataEmissao = dataEmissao
    }
    public get getValor(): string {
        return this.valor
    }
    public mudaCPF(cpf:string) {
        this.valor = cpf
    }
    public deleta(valor:string) {
        delete this.valor[valor];
    }
    public mudaDataEmissao(novaDataEmisao:Date) {
        this.dataEmissao = novaDataEmisao
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao
    }
}