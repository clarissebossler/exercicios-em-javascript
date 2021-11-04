let canvas = document.getElementById('snake');
let context = canvas.getContext('2d'); //getContext: "renderiza o desenho do canvas"
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,   //8 (7,5 na vdd) para a cobrinha aparecer inicialmente no meio do BG (que possui 16*box. 7,5 considerando o tamanho da box)
    y: 8 * box
}
let direction = 'right';
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}



// 1 - DESENHANDO


//Background: função para definir tamanho e cor.
function bgCreate() { 
    context.fillStyle = 'lightgrey';
    context.fillRect(0, 0, 16 * box, 16 * box); //fillRect: metodo que desenha um retângulo preenchido. Parâmetros: posiçao (x, y), altura e largura. O estilo é determinado pelo fillStyle.
}

//Cobrinha: será um "array de coordenadas" em que, a cada "passo", um elemento é adicionado no início e um é retirado no fim.
function snakeCreate(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = 'darkgrey';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

//Comidinha
function foodCreate(){
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, box, box);
}



// 2. DEFININDO ENTRADAS DO TECLADO


//recebendo entradas do teclado com eventListener
document.addEventListener('keydown', update); //quando uma tecla for pressionada, o eventListener chamará a função update, passando como parâmetro o código da tecla.

function update (event){
    //37 é o codigo no botão "seta para direita"
    //"direction != left": para nao ser possivel ir na direção oposta a que se está (ou a cobra teria "2 cabeças")
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}



// 3. AÇÃO - A FUNÇÃO gameStart() é executada a cada 150 milisegundos.


//Inicializar Jogo
function gameStart(){
    //criando o "background infinito":
    //para o eixo x: "se a cabeca da cobra estiver na borda direita, e ela estiver indo para a direita, entao vai a a posição 0"
    if(snake[0].x > 15 * box && direction == 'right') snake[0].x = 0;
    if(snake[0].x < 0 * box && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == 'down') snake[0].y = 0;
    if(snake[0].y < 0 * box && direction == 'up') snake[0].y = 16 * box;

    //checar condição de encerramento do jogo
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval();
            alert('Fim de Jogo!');
        }
    }

    bgCreate();
    snakeCreate();
    foodCreate();

    //coordenadas para a função snakeCreate(?)
    let snakeX = snake[0].x;   
    let snakeY = snake[0].y;

    //diretrizes para a função snakeCreate(?)
    if(direction == 'right') snakeX += box;   //dá para fazer sem a chave!!
    if(direction == 'left') snakeX -= box;
    if(direction == 'up') snakeY -= box;
    if(direction == 'down') snakeY += box;


    //interação cobrinha com comida E passo
    if(snakeX != food.x || snakeY != food.y){
        snake.pop()
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let snakeUnshift = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(snakeUnshift);
} //unshift adiciona um novo elemento no inicio (posição 0) da array.

let game = setInterval(gameStart, 150); //setInterval: vai executar a função gameStart a cada 100 milisegundos.