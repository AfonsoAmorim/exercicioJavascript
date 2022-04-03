import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _cliente;
    

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
            }

    get cliente(){
        return this.cliente;
    }

    _saldo = 0;
    get saldo(){
        return this._saldo;
    }

    constructor(agencia,cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
    }

    
}
