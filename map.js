var arr = [{ id: 1, nome: "Antônio" }, { id: 2, nome: "José" }, { id: 3, nome: "Jonas" }, { id: 4, nome: "Carlos" }]

var newarr = arr.map(function(arr) {
    let { id, nome } = arr
    console.log(id+" "+nome)
})