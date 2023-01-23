const semafaro = document.getElementById('semafaro'); 
const botoes = document.getElementById('botoes');
let corIndex = 0
let idIntervalo =  null;

/* const btnVerde = document.getElementById('btnVerde');
const btnAmarelo = document.getElementById('btnAmarelo');
const btnVermelho = document.getElementById('btnVermelho');
const btnAutomatico = document.getElementById('btnAutomatico'); */

const trafficLight = ( event ) => { //com a variável event nós recebemos esse argumento
    //event.target.id encontra o id em HTML do item que foi clicado
    // ligar.red(); chamado objeto do modo convencional
    pararAutomatico();
    ligar[event.target.id](); // event.target.id buscará o id do elemento em HTML
}


//limpa o intervalo do id
const pararAutomatico = () => {
    clearInterval(idIntervalo);
}

// para para o próximo indice, max 2, se > 2 é resetado para 0
const proximoIndex = () => {
    /* utilizando operadores ternários
    corIndex = corIndex < 2 ? ++corIndex : 0; */

    if(corIndex < 2) {
        corIndex++;
    } else {
        corIndex = 0;
    }
}

//objeto que troca a cor automático
const trocarCor = () => {
    const cores = ['btnVermelho', 'btnAmarelo', 'btnVerde'];
    const cor = cores[corIndex];
    ligar[cor](); // chamando função com alguma coisa (cor) dentro da variável cor
    proximoIndex();
}

//objeto ligar
const ligar = {
    // cada atributo do objeto faz a alteração da imagem source de acordo com seu id
    'btnVermelho': () => semafaro.src = 'imagens/vermelho.png',
    'btnAmarelo': () => semafaro.src = 'imagens/amarelo.png',
    'btnVerde': () => semafaro.src = 'imagens/verde.png',
    'btnAutomatico': () => idIntervalo = setInterval(trocarCor, 1000) // setInterval ele tem um Id dentro, a variável idIntervalo reseta esse valor
}

// o eventListener envia um argumento que indica qual evento foi clicado
botoes.addEventListener('click', trafficLight);


/* Só replicar para as outras cores.....
btnVerde.addEventListener('click', ligarVerde);
function ligarVerde() {
    semafaro.src = 'imagens/verde.png';
}
 */