function alunxs(){
    alunos = [
        {nome: "Julia", nota:5},
        {nome: "Marcos", nota:4},
        {nome: "Maria", nota:9},
        {nome: "João", nota:2},
        {nome: "Augusto", nota:10},
        {nome: "Fernanda", nota:8},
        {nome: "Pâmela", nota:7},
        {nome: "Lucas", nota:2},
        {nome: "Isabella", nota:7},
        {nome: "Gustavo", nota:1},
    ]
    alunosAprovados = []
    mediaFinal = 6
    for (aluno of alunos){
        if (aluno.nota >= mediaFinal) {
            alunosAprovados.push(aluno.nome)
        }
    }
    console.log(alunosAprovados)
}
alunxs()
