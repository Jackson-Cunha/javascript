//valor inicial do index se o array estiver vazio.
var index = -1

array=[]

//função para adicionar elementos a fila.
function add(d) {
    array[++index] = d
}

//função que remove elementos da fila.
function remove() {
    if(index > -1) {
        array[0] = null
        index--
        adjustIndex()
    }
}

//função para organizar os elementos na fila ou seja fazer a fila andar.
function adjustIndex() {
    let cont = 0
    for(i=1; i<= array.length; i++) {
        array[cont] = array[i]
        cont++
    }
    array[array.length-1] = null
}

//chamadas das funções.
add(24)
add(21)
add(2)
remove()
remove()
add(8)

//imprimindo os resultados.
console.log(array)

// a saida será: [ 2, 8, null ]