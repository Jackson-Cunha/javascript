//Herança POO em javascripr

//classe animal
class Animal {
    constructor(_nome, _idade) {
        this.nome = _nome
        this.idade = _idade        
    }

    showAnimal() {
        return "Nome: "+this.nome +" Idade: "+ this.idade
    }
}

//classe gato
class Gato extends Animal {
    constructor(_nome, _idade) {
        super(_nome, _idade)
    }
}

gato = new Gato('Kitana', 11)

console.log(gato.showAnimal())