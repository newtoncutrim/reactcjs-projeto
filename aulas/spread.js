//spread operator ...

// let numeros = [1, 2, 3];

// let numeros2 = [ ...numeros, 3, 4, 5];
// console.log(numeros2);

// let pessoa = {
//     nome: 'marcos',
//     idade: 12
// }

// let novaPessoa = {
//     ...pessoa,
//     status: 'ativa',
//     cidade: 'cajari'
// }
// console.log(novaPessoa);

function novoUsuario(info) {
    let dados = {
        ...info,
        status: 'ativo',
        muito: 'bom'
    }
    console.log(dados);
}

novoUsuario({nome: 'newtex', endereco: 'centro', idade: 24});