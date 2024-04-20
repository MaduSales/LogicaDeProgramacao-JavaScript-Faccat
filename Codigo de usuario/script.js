// Permite ou não permite o acesso do usuário

let codigo = "1233";
let senha = "9999";
let acesso;

codigo = String(prompt("Digite o seu nome de usuário"));

if (codigo === "1234"){
    alert("Acesso permitido");
    acesso = "permitido"
}else{
    alert("Acesso negado. Tente novamente");
    acesso = "negado"
}
  
if (acesso == "permitido"){
    senha = String(prompt("Digite a sua senha"));

    if(senha === "9999"){
        alert("Acesso permitido");
    }else{
        alert("Acesso negado. Tente novamente");
    }
       
} 



