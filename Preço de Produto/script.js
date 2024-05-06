
let total;
let valorFinal;
let nome = prompt("Escreva o nome do produto comprado");
let quantidade = parseFloat(prompt("Escreva a quantidade de produtos comprados"));
let preco_unitario = parseFloat(prompt("Escreva qual o preço unitário deste produto"));
   
total = quantidade * preco_unitario



   if (quantidade <= 5){
    valorFinal = total - (0.2 * total)
    alert("O preço final de "+ nome +" ficará R$ "+ valorFinal.toFixed(2))
   } else if (quantidade > 5 && quantidade <= 10){
    valorFinal = total - (0.3 * total)
    alert("O preço final de " + nome + " ficará R$ " + valorFinal.toFixed(2))
   } else if (quantidade > 10){
    valorFinal = total - (0.5 * total)
    alert("O preço final de " + nome + " ficará R$ " + valorFinal.toFixed(2))
   }
           
