let maior;

let numero1 = parseInt(prompt("Digite um número"));
let numero2 = parseInt(prompt("Digite um outro número"));
let numero3 = parseInt(prompt("Digite um último número"));

if (numero1 > numero2 && numero1 > numero3){
    maior = numero1
} else if (numero2 > numero1 && numero2 > numero3){
    maior = numero2
} else{
    maior = numero3
} 
     
alert("O maior número é " + maior);


