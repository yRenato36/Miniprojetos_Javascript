const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const slider = document.getElementById('slider').value;
const lampada = document.getElementById('lampada');
const fundo = document.getElementById('fundo');
const botao = document.getElementById('botao');

/*reseta para o estado inicial da lâmpada*/
const resetar = document.getElementById('resetar');
resetar.addEventListener('click', funResetar);
function funResetar() {
    lampada.src = 'desligada.png';
    fundo.style.background = '#c5c5c5';
    botao.textContent = 'Ligar';

}

/*==============================================================================*/

/*retorna true ou false, verificação para lâmpada quedrada*/
function lampadaEstaQuebrada() {
    return lampada.src.indexOf('quebrada') > -1;
}

/*double click para ativar esse evendo e quebrar a lâmpada*/
lampada.addEventListener('dblclick', funQuebrar);
function funQuebrar() {
    lampada.src = 'quebrada.png';
    fundo.style.background = '#4b4b4b';
}

/*==============================================================================*/

//escutador, fica esperando o evento click, quando ele ocorre ativa a função funLigar
ligar.addEventListener('click', funLigar);
//quando o mouse passar por cima da lâmpada ela ligará
lampada.addEventListener('mouseover', funLigar);
function funLigar() {
    if (!lampadaEstaQuebrada()) {
        lampada.src = 'ligada.png'; //altera o source da imagem
        fundo.style.background = '#ffe270';
        botao.textContent = 'Desligar';
    }
}

/*==============================================================================*/

//desliga a lâmpada quando clicar no botão desligar 
desligar.addEventListener('click', funDesligar);
lampada.addEventListener('mouseleave', funDesligar);
function funDesligar() {
    if (!lampadaEstaQuebrada()) {
        lampada.src = 'desligada.png';
        fundo.style.background = '#c5c5c5';
        botao.textContent = 'Ligar';
    }
}

/*==============================================================================*/

/*ligar e desligar em apenas um botão*/
botao.addEventListener('click', ligaDesliga); /*está escutando o evento click, quando ele ocorrer é ativado a função ligaDesliga()*/
function ligaDesliga() {
    /*se o conteúdo do botão foi igual a Ligar entra no if*/
    if (botao.textContent === 'Ligar') {
        if (!lampadaEstaQuebrada()) {
            //lampada.src = 'ligada.png';
            funLigar();
            botao.textContent = 'Desligar';
        }
    }
    else {
        if (!lampadaEstaQuebrada()) {
            //lampada.src = 'desligada.png';
            funDesligar();
            botao.textContent = 'Ligar';
        }
    }
}

/*==============================================================================*/

/*funciona apenas 1x*/
function funSlider() {
    slider.value = 0;
    if (slider.value === 0) {
        funLigar();
    }
    else {
        funDesligar();
    }
}
