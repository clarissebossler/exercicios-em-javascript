//Regiane Alves

/*
O que é API? Application Programming Interface (interface de programação de aplicação)

Ou seja, API é um conjunto de normas que possibilita a comunicação entre plataformas através de uma série de padrões e protocolos.

A função de uma API é, basicamente, facilitar e simplificar o trabalho de desenvolvedores, além de oferecer um padrão para a criação de novas plataformas. Com o uso das APIs, não é necessário criar códigos personalizados para cada função que um programa for executar, o que simplifica a criação de novos aplicativos, softwares e plataformas em geral.
*/

window.addEventListener("load", () => {    
//Este método observador serve apara disparar a função apenas quando a pagina estiver completamente carregada

let segundo = 180;  //tempo que queremos que o cronomotro execute, em segundos. Neste caso, estará pré-definido, mas também poderia ser obtido atraves de APIs.

const divContador = document.getElementById("timer");  //pegou a div do html

const segundoPassa = () => {

    //o "display" do contador terá um numero para minutos (será o let minutos"), dois pontos (:), e um numero para segundos (let segundosRestantes). Precisamos incluir também os zeros: (3:7 deve ser 03:07).

    let minutos = Math.floor(segundo/60);
    let segundosRestantes = segundo % 60;


    //configurando o diplay de segundos:
    if (segundosRestantes < 10) {  // se for menor que 10, precisa incluir o 0.
        segundosRestantes = '0' + segundosRestantes;   //exemplo de coerção de tipos: string + numero (feature)
    }

    //configurando o display de minutos: (mesma logica anterior)
    if (minutos < 1) {
        minutos = '0' + minutos;
    } else {
        (minutos < 10)
        minutos = '0' + minutos;
    }
    

    //unindo minutos e segundos
    divContador.innerHTML = minutos + ':' + segundosRestantes;
    
    //funcionamento
    if (segundo > 0) {
        segundo = segundo -1;
    } else {
        divContador.innerHTML = "Acabou!";
    }
}

const contagemRegressiva = setInterval (() => segundoPassa(), 1000)    //setInterval é uma função interna do JS que permite que determinada função ou codigo seja executado em função de algum periodo de tempo (em milissegundos).

});