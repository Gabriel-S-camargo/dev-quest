let usuario = {
    nome: 'Roberto',
    excluir: function(){
        console.log('usuário, ' + this.nome + 'Fpi excluído')
    }
} 

usuario.excluir()