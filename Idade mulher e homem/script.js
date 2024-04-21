// Faz a soma da idade do homem mais velho com a da mulher mais nova, e a idade do homem mais novo com a da mulher mais velha

let idadeMulher1;
let idadeMulher2;
let idadeHomem1;
let idadeHomem2;
let soma1;
let soma2;

idadeMulher1 = parseInt(prompt("Digite a idade de uma mulher"));
idadeMulher2 = parseInt(prompt("Digite a idade de uma outra mulher, sem ser igual à anterior"));

idadeHomem1 = parseInt(prompt("Agora digite a idade de um homem"));
idadeHomem2 = parseInt(prompt("Digite a idade de um outro homem, sem ser igual à anterior"));

if (idadeMulher1 > idadeMulher2){
   soma1 = idadeHomem2 + idadeMulher1
} else{
    soma1 = idadeHomem1 + idadeMulher2
}

if (idadeHomem1 > idadeHomem2){
   soma2 = idadeHomem1 + idadeMulher2
}else{
    soma2 = idadeHomem2 + idadeMulher1
}
   
alert("O produto da idade do homem mais velho com a da mulher mais nova é " + soma1);
alert("O produto da idade do homem mais novo com a da mulher mais velha é " + soma2);
