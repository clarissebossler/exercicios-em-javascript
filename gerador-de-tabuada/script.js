
function multiplicar() {
    tnnum = document.getElementById('tnnum')
    num = Number(tnnum.value)
    mult = 0
    while(mult < 10) {
        mult ++
        var item = document.createElement('option')       //para criar janela de opções (que vamos usar para apresentar a tabuada). Também é possivel criar no HTML
        item.text = `${num} x ${mult} = ${num*mult}`     //cria a linha com a resposta (item)
        tab.appendChild(item)                           //coloca a linha com a resposta (item) dentro da "tab", que é a janela seletora.
    }
}

function limpar() {
    document.location.reload()
}