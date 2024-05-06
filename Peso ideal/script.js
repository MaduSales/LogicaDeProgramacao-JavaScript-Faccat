let peso_ideal;


let sexo = prompt("Digite o seu sexo (M ou F)").toUpperCase(); // <- Recebe minúsculas e converte para ler maiúsculas

let altura = parseFloat(prompt("Digite a sua altura"));

if (sexo === "M" ){
    peso_ideal = (72.7 * altura) - 58
    alert("por você ser homem, o seu peso será "+ peso_ideal.toFixed(2));
} else if (sexo === "F"){
    peso_ideal = (62.1 * altura) - 44.7
    alert("por você ser mulher, o seu peso será "+ peso_ideal.toFixed(2));
}
