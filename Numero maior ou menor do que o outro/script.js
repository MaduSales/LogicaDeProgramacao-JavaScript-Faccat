// Lê dois valores e diz se são iguais ou se um é maior do que o outro

let numero1 = parseInt(prompt("Digite um número"));
let numero2 = parseInt(prompt("Digite outro número"));

if (numero1 > numero2){
    alert("O "+ numero1 +" é maior!");
} else if (numero2 > numero1){
    alert("O "+ numero2 +" é maior!");
} else{
    alert("Os números são iguais");
}

