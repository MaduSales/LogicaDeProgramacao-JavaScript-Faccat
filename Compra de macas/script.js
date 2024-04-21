// Determina o valor total de uma compra de maçãs

let valor;
let maca;
let quantidade = parseFloat(prompt("Digite quantas maçãs serão compradas"));

if (quantidade >= 12){
    valor = 1.00
    maca = valor * quantidade
    alert("Você comprou R$ " + maca + " em maçãs");
} else{
    valor = 1.30
    maca = valor * quantidade
    alert("Você comprou R$ " + maca.toFixed(2) + " em maçãs");
}


