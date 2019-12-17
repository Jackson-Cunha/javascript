//Herança POO em javascript com Encapsulamento.
//Apenas sintático pois ainda não funciona como em outras linguagens como JAVA falando em níveis de acesso.

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

//criando o objeto
gato = new Gato()

//atribuindo valores através do método set
gato.sNome = 'Puka'
gato.sIdade = 3

//retornando valores através do método get
console.log('Nome: '+gato.gNome+' Idade: '+gato.gIdade)

//saída: Nome: Puka Idade: 3