// busca o elemento do botão
const botaoEnviar = window.document.getElementById('botaoEnviar');
// adiciona um ouvinte que está esperando o evendo click depois que clicar será executado a função calcular
botaoEnviar.addEventListener('click', calcular);

function calcular() {
    let nome = window.document.getElementById('nome').value;
    let sobrenome = window.document.getElementById('sobrenome').value;
    let idade = window.document.getElementById('idade').value;
    let altura = window.document.getElementById('altura').value;
    let peso = window.document.getElementById('peso').value;
    let resultado = window.document.getElementById('resultado');
    let textoResultado = window.document.getElementById('textoResultado');

    if(nome === "" && sobrenome === "" && idade === "" && altura === "" && peso === "") {
        alert("Por favor, preencha todos os campos");
    }
    else if (peso < 0 || altura < 0) {
        textoResultado.textContent = "Por favor, insira valores maiores que 0";
        resultado.textContent = null;
    }
    else {
        //cálculo do imc
        let calculo = peso / (altura * altura);
        resultado.textContent = calculo.toFixed(2);
        //resultado.innerHTML = 'teste';

        if (calculo <= 18.5) {
            textoResultado.textContent = `${nome} ${sobrenome}, Você está Abaixo do peso normal`;
        }
        else if (calculo > 18.5 && calculo <= 24.9) {
            textoResultado.textContent = `${nome} ${sobrenome}, Você está no peso normal`;
        }
        else if (calculo > 24.9 && calculo <= 29.9) {
            textoResultado.textContent = `${nome} ${sobrenome}, Você está com excesso de peso`;
        }
        else if (calculo > 29.9 && calculo <= 34.9) {
            textoResultado.textContent = `${nome} ${sobrenome}, Você está com obesidade classe I`;
        }
        else if (calculo > 34.9 && calculo <= 39.9) {
            textoResultado.textContent = `${nome} ${sobrenome}, Você está com obesidade classe II`;
        }
        else {
            textoResultado.textContent = `${nome} ${sobrenome}, Você está com obesidade classe III`;
        }
    }
}