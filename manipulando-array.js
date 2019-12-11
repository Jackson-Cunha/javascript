/*manipular para o segunndo array
*as informações do primeiro array desde que as informações repetidas venham juntas
*restando assim no segundo array informações não repetidas.
*/
primeiro = ['jackson', 'jackson', 'jackson', 'joaquim', 'cunha', 'cunha', 'mars', 'jupiter']

segundo = []

var posicaoA = 0
var posicaoB = 1
var contador = 0
var index = 0

while(contador < primeiro.length) {
    if(primeiro[posicaoA] === primeiro[posicaoB]) {
        posicaoA++
        posicaoB++
    }else {
        segundo[index] = primeiro[posicaoA]
        index++
        posicaoA++
        posicaoB++
    }
    contador++
}

console.log(segundo)

// a saída será: [ 'jackson', 'joaquim', 'cunha', 'mars', 'jupiter' ] 