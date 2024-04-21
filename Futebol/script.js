// Diz qual time foi o vencedor da partida ou se houve empate

let time1;
let time2;
let gols1;
let gols2;

time1 = String(prompt("Digite o nome do primeiro time de futebol"));
gols1 =  parseInt(prompt("Quantos gols esse time marcou?"));
time2 = String(prompt("Digite o nome do segundo time de futebol"));
gols2 =  parseInt(prompt("Quantos gols esse time marcou?"));


if (gols1 > gols2){
    alert(time1 + " ganhou a partida!");
} else if(gols2 > gols1){
    alert(time2 + " ganhou a partida!");
}else{
    alert("Houve empate!");
}

