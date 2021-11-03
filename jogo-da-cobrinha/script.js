//PASSO 1: CRIANDO O BACKGROUND E A COBRINHA


let canvas = document.getElementById('snake');
let context = canvas.getContext('2d'); //getContext: "renderiza o desenho do canvas"
let box = 32;
let snake = [];
snake[0] = {
    x: 7.5 * box,   //8 (7,5 na vdd) para a cobrinha aparecer inicialmente no meio do BG (que possui 16*box. 7,5 considerando o tamanho da box)
    y: 7.5 * box,
}
let direction = 'right';



//Background: função para definir tamanho e cor.
function bgCreate() { 
    context.fillStyle = 'lightgrey';
    context.fillRect(0, 0, 16 * box, 16 * box); //fillRect: metodo que desenha um retângulo preenchido. Parâmetros: posiçao (x, y), altura e largura. O estilo é determinado pelo fillStyle.
}
bgCreate();


//Cobrinha: será um "array de coordenadas" em que, a cada "passo", um elemento é adicionado no início e um é retirado no fim.
function snakeCreate(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = 'darkgrey';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
snakeCreate();



//Inicializar Jogo: definição do passo da cobrinha. Vamos colocar as funções já desenvolvidas dentro de uma unica função com caráter de inicialização.
function gameStart(){
    bgCreate();
    snakeCreate();

    //coordenadas para a função snakeCreate(?)
    let snakeX = snake[0].x;   
    let snakeY = snake[0].y;

    //diretrizes para a função snakeCreate(?)
    if(direction == 'right') snakeX += box;   //dá para fazer sem a chave!!
    if(direction == 'left') snakeX -= box;
    if(direction == 'up') snakeY -= box;
    if(direction == 'down') snakeY += box;

    //fazendo o passo (criar um box no inicio e apagar o do final)
    snake.pop();

    let snakeUnshift = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(snakeUnshift);
}

let game = setInterval(gameStart, 200); //setInterval: vai executar a função gameStart a cada 100 milisegundos.