// Descreve o preço a ser pago pelos morangos e pelas maças de uma feira
let morangosKG;
let preco_morango;
let macasKG;
let preco_maca;
let totalCompra;
let valorFinal;
let quilosTotais;


morangosKG = parseFloat(prompt("Digite a quantidade, em KG, de morangos comprados"));
macasKG = parseFloat(prompt("Digite a quantidade, em KG, de maçãs comprados"));

if (morangosKG <= 5){
    preco_morango = 2.50 * morangosKG
    alert("O preço só dos morangos é R$ "+ preco_morango.toFixed(2));
} else{
    preco_morango = 2.20 * morangosKG
    alert("O preço só dos morangos é R$ "+ preco_morango.toFixed(2));
}
      

if (macasKG <= 5){
    preco_maca = 1.80 * macasKG
    alert("O preço só das maçãs é R$ "+ preco_maca.toFixed(2));
} else{
    preco_maca = 1.50 * macasKG
    alert("O preço só das maçãs é R$ "+ preco_maca.toFixed(2));
}
   quilosTotais = morangosKG + macasKG
   totalCompra = preco_morango + preco_maca

if (quilosTotais > 8 || totalCompra > 25){
    valorFinal = totalCompra - (10 / 100 * totalCompra);
}
      
   alert("Como o cliente comprou " + morangosKG +" Kg de morangos e"+ macasKG +" Kg de maçãs, pagará, no total R$ "+ valorFinal.toFixed(2));
