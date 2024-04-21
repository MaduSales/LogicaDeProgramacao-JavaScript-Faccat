// Calcula as notas de um aluno

let nota1;
let nota2;
let nota3;
let mediaExercicios;
let mediaAproveitamento

nota1 = parseFloat(prompt("Escreva a primeira nota do aluno"));
nota2 = parseFloat(prompt("Escreva a segunda nota do aluno"));
nota3 = parseFloat(prompt("Escreva a terceira nota do aluno"));

mediaExercicios = (nota1 + nota2 + nota3) / 3
alert("A média dos exercícios é " + mediaExercicios.toFixed(1));
alert("Agora, calculando a média de aproveitamento...");

mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7
 alert("O resultado é "+ mediaAproveitamento.toFixed(1));


if (mediaAproveitamento >= 9){
    alert("A média de aproveitamento desse aluno é A");
} else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9) {
    alert("A média de aproveitamento desse aluno é B");
} else if (mediaAproveitamento >= 6 && mediaAproveitamento < 7.5){
    alert("A média de aproveitamento desse aluno é C");
}else if (mediaAproveitamento < 6){
    alert("A média de aproveitamento desse aluno é D");
}
           