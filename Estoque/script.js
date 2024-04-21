// Diz se precisa efetuar uma compra ou não para o estoque
let quantidadeMedia;

let quantidadeAtualEstoque = parseFloat(prompt("Digite a quantidade atual em estoque"));
let quantidadeMaxima = parseFloat(prompt("Digite a quantidade máxima do estoque"));
let quantidadeMinima = parseFloat(prompt("Digite a quantidade mínima do estoque"));

quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2

if (quantidadeAtualEstoque >= quantidadeMedia){
    alert("Não efetuar compra");
} else{
    alert("Efetuar compra");
}

