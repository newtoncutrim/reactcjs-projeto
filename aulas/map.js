// let lista = ["newton", 'jose', 'ola'];

// lista.map((item, index) => {
//     console.log(`${item} posiçao ${index}`)
// })

//reduce = busca reduzir um array

let numeros = [4, 5, 6, 7];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(acumulador)
    console.log(numero)
    console.log(indice)
    console.log(original)

    return acumulador += numeros;
})