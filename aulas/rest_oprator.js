//para receber varios nomes
// function convidados(...arrg) {
//     console.log('sejam bem vindos')
//     console.log(arrg)
// }
// convidados('marcos', 'u', 'tu');

// function sorteio(...numeros) {
//     if(numeros != 0){
//         setInterval(() =>{
//             let numeroGerado = Math.floor(Math.random() * numeros.length)
//             console.log(numeros[numeroGerado])
//         }, 5000)

//     }
// }


function sorteio(...numeros) {
    let numeroGerado = Math.floor(Math.random() * numeros.length)

    console.log(numeros[numeroGerado])

}

sorteio(1, 2, 4, 56, 67, 7, 12)

