function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post');

    let primeiroPost = posts[0]; 
    console.log('primeiroPost',primeiroPost )
    primeiroPost.style.backgroundColor = 'red'

} 

function aumentarFonte() {
    let textPost = document.getElementsByClassName('texto-post') 
    //console.log(textPost)
    textPost[1].classList.add('fonte-grande')
    
}