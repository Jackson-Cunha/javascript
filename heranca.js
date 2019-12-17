//Herança POO em javascripr

//classe animal
class Animal {
    constructor(_nome, _idade) {
        this.nome = _nome
        this.idade = _idade        
    }

    get gNome() {
        return this.nome
    }

    set sNome(n) {
        this.nome = n
    }

    get gIdade() {
        return this.idade
    }

    set sIdade(i) {
        this.idade = i
    }
}

//classe gato
class Gato extends Animal {
    constructor(_nome, _idade) {
        super(_nome, _idade)
    }
}

gato = new Gato()

gato.sNome = 'Puka'
gato.sIdade = 3

console.log('Nome: '+gato.gNome+' Idade: '+gato.gIdade)

//saída: Nome: Puka Idade: 3