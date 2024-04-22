// Coloca os números em ordem crescente

let numero1;
let numero2;
let numero3;
let auxiliar;

numero1 = parseInt(prompt("Digite um número"));
numero2 = parseInt(prompt("Digite um outro número"));
numero3 = parseInt(prompt("Digite um último número"));

if (numero1 > numero2){
    auxiliar = numero1
    numero1 = numero2
    numero2 = auxiliar
} 

if (numero2 > numero3){
    auxiliar = numero2
    numero2 = numero3
    numero3 = auxiliar
}

if (numero1 > numero2){
    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;
}

alert("A ordem será "+ numero1 +", "+ numero2 +", "+ numero3);
