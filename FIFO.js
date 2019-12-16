var index = -1


array=[]

function add(d) {
    array[++index] = d
}

function remove() {
    array[0] = null
    index--
}

function adjustIndex() {
    let cont = 0
    for(i=1; i<= array.length; i++) {
        array[cont] = array[i]
        cont++
    }
    array[array.length-1] = null
}

add(1)
add(25)
add(3)
add(44)
remove()
adjustIndex()
remove()
adjustIndex()
add(8)


console.log(array)