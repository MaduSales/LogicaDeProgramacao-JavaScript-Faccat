// Determina o valor da gasolina e do alcool
let valorGasolina;
let valorAlcool;
let litrosGasolina = parseFloat(prompt("Digite quantos litros de gasolina serão colocados"));
let litrosAlcool = parseFloat(prompt("Digite quantos litros de álcool serão colocados"));


if (litrosGasolina <= 20){
    valorGasolina = (litrosGasolina * 3.30) + (3 / 100 * litrosGasolina)
}else if (litrosGasolina > 20){
    valorGasolina = (litrosGasolina * 3.30) + (5 / 100 * litrosGasolina)
}

if (litrosAlcool <= 20){
    valorAlcool = (litrosAlcool * 2.90) + (4 / 100 * litrosAlcool)
} else if(litrosAlcool > 20){
    valorAlcool = (litrosAlcool * 2.90) + (6 / 100 * litrosAlcool)
}

alert("O valor final de gasolina será de R$ " + valorGasolina.toFixed(2) + " e o valor final do alcool será de R$ "+ valorAlcool.toFixed(2));