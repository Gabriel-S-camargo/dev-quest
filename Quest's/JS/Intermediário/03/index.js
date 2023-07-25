const quadrado = document.getElementById("quadrado"); 

const azul = document.querySelector(".azul")

//console.log(quadrado.classList.contains("azul"))

quadrado.addEventListener('click',() =>{
    const azulExiste = quadrado.classList.contains("azul")
    
    if (azulExiste) {
        quadrado.classList.remove('azul')
    }else{
        quadrado.classList.add('azul')
    }
})
