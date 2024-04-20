// Verifica se empregado está qualificado para aposentadoria
let idade;
let anosTrabalhados
let anoNascimento = parseInt(prompt("Digite o ano de nascimento do empregado"));
let ingresso = parseInt(prompt("Digite o ano de ingresso do empregado"));

idade = 2024 - anoNascimento
anosTrabalhados = 2024 - ingresso

if (idade >= 65){
    alert("Requer aposentadoria");
} else if(anosTrabalhados >= 30){
    alert("Requer aposentadoria");
}else if (idade >= 60 && anosTrabalhados >= 25){
    alert("Requer aposentadoria");
}else{
    alert("Não requer aposentadoria");
}
       