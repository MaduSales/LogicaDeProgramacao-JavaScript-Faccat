// Coloca os valores na ordem crescente

let n1;
let n2;
let n3;
let temp;

n1 = parseFloat(prompt("Digite um valor"));
n2 = parseFloat(prompt("Digite um outro valor"));
n3 = parseFloat(prompt("Digite um último valor"));

if (n1 == n2 || n1 == n3 || n2 == n3){
    alert("Existem igualdades que não permitem a ordem");
} 

if (n1 > n2){
    temp = n1
    n1 = n2
    n2 = temp
} 

if (n2 > n3){
    temp = n2
    n2 = n3
    n3 = temp
}

if (n1 > n2){
    temp = n1
    n1 = n2
    n2 = temp
}

alert(`A ordem será ${n1}, ${n2}, ${n3}`);
