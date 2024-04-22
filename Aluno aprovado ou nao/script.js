// Descreve se um aluno foi aprovado ou reprovado de acordo com suas notas
let nota1;
let nota2
let media;

nota1 = parseFloat(prompt("Digite a nota da primeira prova"));
nota2 = parseFloat(prompt("Digite a nota da segunda prova"));

media = (nota1 + nota2) / 2

if (media >= 6){
    alert("O aluno foi aprovado!");
} else{
   alert("O aluno não foi aprovado :(");
}

