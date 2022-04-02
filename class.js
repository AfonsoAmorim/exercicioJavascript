class Aluno {
    constructor(nome, numsaladeaula, matricula){
        this.nome = nome;
        this.numsaladeaula = numsaladeaula;
        this.matricula = matricula;
    }
    nomeAluno(){
        console.log(`O nome do aluno é: ${this.nome}`)
    }
    dadosAluno(){
        console.log(`${this.nomeAluno} é aluno da sala de aula ${this.numsaladeaula} e tem a matricula ${this.matricula}`)
    }
}

const Aluno1 = new Aluno("Alonso Silva", 10, 100410);
Aluno1.nomeAluno();
Aluno1.dadosAluno();