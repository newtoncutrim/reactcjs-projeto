//setInterval
function acao() {
    document.write('<h1>danni é muito boa ;) </h1>...<br>')
}
// setInterval(acao, 3000) //funcao e mili segundos

//resumida
/*var variavel =*/ setInterval(() => {
    document.write('ola')
}, 1000)
// se atribuir a uma variavel pode pausar a funçao com clearIntervao(variavel)

//setTimeout
setTimeout(acao, 2000)
setTimeout(() => {
    document.write("pdc")
}, 200)