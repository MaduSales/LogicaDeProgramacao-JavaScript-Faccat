// Indica se a pessoa tem idade necessária para votarno Brasil ou não
let resultado;
let anoAtual = parseInt(prompt("Digite o ano em que você está"));
let anoNascimento = parseInt(prompt("Digite o ano em que você nasceu"));

resultado = anoAtual - anoNascimento
if (resultado >= 16){
    alert("Você já tem idade para votar no Brasil, pois sua idade é " + resultado + " anos");
}else{
    alert("Sua idade é inferior a idade necessária para votar no Brasil, pois sua idade é " + resultado + " anos");
}

