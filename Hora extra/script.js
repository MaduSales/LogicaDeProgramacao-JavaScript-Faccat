// Calcula o salário mensal de um funcionário e considera a possibilidade de horas extras


let salario
let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês"));
let horaRegular = parseFloat(prompt("Digite o salário por hora"));

if (horasTrabalhadas > 40){
    salario = (40 * horaRegular)+ ((horasTrabalhadas - 40)*(horaRegular * 1.5));
    alert("O salário mensal será R$ " + salario);
} else{
    salario = horasTrabalhadas * horaRegular
    alert("O salário mensal será R$ " + salario);
}

