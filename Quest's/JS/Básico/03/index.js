const confirm = document.getElementById("confirm");
const deny = document.getElementById("deny");
const header = document.getElementById("header");
const retur = document.getElementById("return")

confirm.addEventListener("click", function(e){
     alert('Ótimo! Nós temos as melhores camas da região')
})

deny.addEventListener("click", function(e){
     alert('Que pena você parecia mais legal')
})

function changecontent(){
    header.innerHTML = '<p>Ótimo! Nós temos as melhores camas da região</p>'
}

function negativechangecontent(){
    header.innerHTML = '<p>Que pena! Você parecia ser uma pessoa mais legal</p>'
}

function returncontent(){
    header.innerHTML = '<p>Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?</p>'
}

confirm.addEventListener("click", changecontent);

deny.addEventListener("click", negativechangecontent);

retur.addEventListener("click", returncontent );

const vaiSeHospedar = confirm ('Seja bem vindo(a) aventureiro(a)! Gostaria de pagar R$ 50,00 apra passar a noite na nossa hospedagem ?')

console.log(vaiSeHospedar)

if(vaiSeHospedar){
    alert('Ótimo nos temos as melhores camas da região')
}else{
    alert('Que pena! Você parecia uma pessoa mais legal')
}



