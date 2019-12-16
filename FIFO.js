//valor inicial se o array estiver vazio.
var index = -1

array=[]

//função para adicionar elementos a fila.
function add(d) {
    array[++index] = d
}

//função que remove elementos a fila.
function remove() {
    array[0] = null
    index--
}

//função para organizar os elemantos na fila ou seja fazer a fila andar.
function adjustIndex() {
    let cont = 0
    for(i=1; i<= array.length; i++) {
        array[cont] = array[i]
        cont++
    }
    array[array.length-1] = null
}

//chamadas das funções.
add(1)
add(25)
add(3)
add(44)
remove()
adjustIndex()
remove()
adjustIndex()
add(8)

//imprimindo os resultados.
console.log(array)

// a saida será: [ 3, 44, 8, null ]