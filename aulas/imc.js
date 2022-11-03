var peso;
var altura;
var resultado;
var imc;

function calcular(event) {
    //prevenir mostrar dados na url
    event.preventDefault();

    peso = document.querySelector('#peso').value;
    altura = document.querySelector('#altura').value;
    imc = peso / (altura * altura);

    resultado = document.querySelector('#resultado');
    if (imc < 17 ) {
        resultado.innerHTML = "seu reulta do e: " + imc.toFixed(2) + " vc ta abaixo do peso"
    }
    document.querySelector('#peso').value = '';
    document.querySelector('#altura').value = '';


    

}