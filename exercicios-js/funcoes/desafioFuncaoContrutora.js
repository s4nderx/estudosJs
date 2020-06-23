function Pessoa (nome){

    this.nome = nome;

    falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Phellipe')
p1.falar()