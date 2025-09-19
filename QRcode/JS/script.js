// DOM

const url = document.querySelector('#url')
const botao = document.querySelector('#botao')
const qr = document.querySelector('#qrcode')

// EVENTOS

botao.addEventListener('click',gerador)
url.addEventListener('keydown', (event)=> {
    if(event.key == 'Enter'){
        gerador()
    }
})

// FUNÇÔES

function gerador(){
    texto = url.value
    if(texto){
        qr.innerHTML = ''
        code = new QRCode(qr,{
            text:texto,
            width:300,
            height:300,
            colorDark: 'rgba(0,0,0,0)',
            colorLight: 'black'
        }

        )
    } else {
        qr.innerHTML = ''
        }
}
