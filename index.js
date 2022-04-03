import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";



const cliente1 = new Cliente("Alfonso", 22222222222);

const cliente2 = new Cliente("Aline",8885522222);


const ContaCorrenteAlfonso = new ContaCorrente(5522, cliente1);
ContaCorrenteAlfonso.depositar(500);

const conta2 = new ContaCorrente(12, cliente2);




ContaCorrenteAlfonso.transferir(30, conta2);
console.log(conta2.saldo);


//console.log("O nome  e cpf do Alfonso é:  ");
//console.log(cliente1);


console.log(ContaCorrenteAlfonso);
