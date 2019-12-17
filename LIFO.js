//PILHA
index = -1

lifo = []

//função para adicionar os elementos na pilha
function add(e) {
    lifo[++index] = e 
}

//função para remover os elementos da pilha
function remove() {
    if(index > -1) {
        lifo[index] = ''
        index--
    }
}

//chamando as funções
add('jackson')
add('elis')
add('maria')
remove()
add('banana')
add('json')
add('abacate')
remove()

console.log(lifo)

//a saida será: [ 'jackson', 'elis', 'banana', 'json', '' ]

