"use strict";

// Criar array de objetos com alunos
var alunos = [{
  nome: "João",
  nota: 8
}, {
  nome: "Maria",
  nota: 5
}, {
  nome: "Pedro",
  nota: 7
}, {
  nome: "Ana",
  nota: 9
}, {
  nome: "Carlos",
  nota: 4
}, {
  nome: "Julia",
  nota: 6
}, {
  nome: "Luiz",
  nota: 8
}, {
  nome: "Sandra",
  nota: 5
}];

// Função que retorna apenas os alunos com nota maior ou igual à 6
function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Chamar a função e imprimir o resultado
var aprovados = alunosAprovados(alunos);
console.log(aprovados);

// [
//     { nome: "João", nota: 8 },
//     { nome: "Pedro", nota: 7 },
//     { nome: "Ana", nota: 9 },
//     { nome: "Julia", nota: 6 },
//     { nome: "Luiz", nota: 8 }
// ]