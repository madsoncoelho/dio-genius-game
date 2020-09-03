let order = [];
let clickedOrder = [];
let score = 0;
const colors = ['green', 'red', 'yellow', 'blue'];
let blue, red, green, yellow;
let rotation = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

blue = document.querySelector('.blue');
red = document.querySelector('.red');
green = document.querySelector('.green');
yellow = document.querySelector('.yellow');

const topLeft = document.querySelector('.top-left');
const topRight = document.querySelector('.top-right');
const bottomRight = document.querySelector('.bottom-right');
const bottomLeft = document.querySelector('.bottom-left');

// cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// acende a próxima cor
let lightColor = (element, number) => {
    number = number * 1000;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 500);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

// checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        shuffleColors();
        nextLevel();
    }
}

// função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// função que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// função para o próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

// função de ínico do jogo
let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo');
    score = 0;

    nextLevel();
}

let shuffleColors = () => {
    rotation = (rotation + 1) % 4;

    topLeft.classList.remove(...colors);
    topLeft.classList.add(colors[(0 + rotation) % 4]);

    topRight.classList.remove(...colors);
    topRight.classList.add(colors[(1 + rotation) % 4]);

    bottomRight.classList.remove(...colors);
    bottomRight.classList.add(colors[(2 + rotation) % 4]);

    bottomLeft.classList.remove(...colors);
    bottomLeft.classList.add(colors[(3 + rotation) % 4]);

    blue = document.querySelector('.blue');
    red = document.querySelector('.red');
    green = document.querySelector('.green');
    yellow = document.querySelector('.yellow');

    green.onclick = () => click(0);
    red.onclick = () => click(1);
    yellow.onclick = () => click(2);
    blue.onclick = () => click(3);
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


playGame();


