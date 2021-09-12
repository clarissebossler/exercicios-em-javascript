function verificar() {
    var data = new Date()                            //pega a data atual
    var ano = data.getFullYear()                    //pega os 4 dígitos do ano de dentro da data
    var fano = document.getElementById('txtano')          //pega o ano preenchido no formulário
    var res = window.document.getElementById('res')      //pega o texto que será substituído pelo resultado
    var idade = ano - Number(fano.value)                
    
    /*
    Estrutura do If:
    Se há Erro:
        tente novamente.
    Se não há erro:
        Predefinir imagem.
        Se é homem:
            Qual faixa etária.
            resultado + escolher imagem.
        Se é mulher:  
            Qual faixa etária.
            resultado + escolher imagem.
    
    acrescenta (append) a imagem final.
    */
        
    if (fano.value.length == 0 || fano.value > ano) {  //comprimento (length) do ano do formulário (fano) == 0: nada foi digitado. OU (||) o fano é maior que o ano atual.
        window.alert('ERRILDO! Verifique os dados e tente novamente.') // 
    } else {
        var generoformulario = document.getElementsByName('radgen')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')    //a imagem tb pode ser inserida aqui no JS, assim como seria definida no html entre <>
        var genero = ''
        if(generoformulario[0].checked) {
            document.body.style.background = '#525494'   //opcional: muda a cor do fundo para todos os homens
            if (idade >= 0 && idade < 18) {
                genero = "Menino"              
                img.setAttribute('src', 'bebem.png')  // escolhe a imagem
            } else if (idade >= 18 && idade < 30) {
                genero ="Jovem"
                img.setAttribute('src', 'jovemm.png')
            } else if (idade >= 30 && idade < 70) {
                genero = "Homem"
                img.setAttribute('src', 'adultom.png')
            } else if (idade >= 70) {
                genero = "Senhor"
                img.setAttribute('src', 'idoso.png')
            }
        } else if (generoformulario[1].checked) {
        document.body.style.background = '#daca9b'    //opcional: muda a cor do fundo para todas mulheres  
            if (idade >=0 && idade <18) {
                genero = "Menina"
                img.setAttribute('src', 'bebef.png')
            } else if (idade >= 18 && idade < 30) {
                genero = "Jovem"
                img.setAttribute('src', 'jovemf.png')
            } else if (idade >= 30 && idade < 70) {
                genero = "Mulher"
                img.setAttribute('src', 'adultof.png')
            } else if (idade >= 70) {
                genero = "Senhora"
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}   

function reiniciar() {
    document.location.reload()
}

