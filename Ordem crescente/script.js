let aux;

let val1 = parseInt(prompt("Digite um valor"));
let val2 = parseInt(prompt("Digite outro valor diferente do anterior."));

if (val1 > val2){
    aux = val1
    val1 = val2
    val2 = aux
    alert("A ordem será "+ val1 + " e " + val2);

} else if (val2 > val1){
    aux = val2
    val2 = val1
    val1 = aux
    alert("A ordem será "+ val2 + " e " + val1);
} else{
   alert("Erro! Os dois valores são iguais.");
}


