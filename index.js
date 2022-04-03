import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";



const cliente1 = new Cliente("Alfonso", 22222222222);

const ContaCorrenteAlfonso = new Conta("corrente",250, cliente1, 5522);
//ContaCorrenteAlfonso.depositar(500);
ContaCorrenteAlfonso.sacar(100);

const contaPoupanca = new Conta("poupanca",50, cliente1, 5522);

console.log(ContaPoupanca);
console.log(ContaCorrenteAlfonso);
