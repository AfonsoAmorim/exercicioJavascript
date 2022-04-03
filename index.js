import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";



const cliente1 = new Cliente();
cliente1.nome = "Alfonso";
cliente1.cpf = 22222222222;

const cliente2 = new Cliente();
cliente2.nome = "Aline";
cliente2.cpf = 8885522222;

const ContaCorrenteAlfonso = new ContaCorrente();
ContaCorrenteAlfonso.agencia = 5522;



ContaCorrenteAlfonso.depositar(2000);

const valorSacado = ContaCorrenteAlfonso.sacar(300);



console.log(cliente1)
console.log(cliente2)

console.log("O saldo e agência do Alfonso é:  ");
console.log(ContaCorrenteAlfonso)