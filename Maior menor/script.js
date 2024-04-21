// Diferencia o maior e o menor número
let val1;
let val2;

val1 = parseInt(prompt("Digite um valor"));
val2 = parseInt(prompt("Digite outro valor diferente do anterior"));
if  (val1 > val2){
    alert(val1 + " é o maior valor entre os dois digitados");
} else if (val1 < val2) {
    alert(val2 + " é o maior valor entre os dois digitados");
} else{
    alert("Erro! Os dois valores são iguais");
}

