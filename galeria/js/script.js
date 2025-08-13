//DOM

const x = document.querySelector('#x')
const btneymar = document.querySelector('#btneymar')
const btcr7 = document.querySelector('#btcr7')
const btpulga = document.querySelector('#btpulga')

//EVENTOS

btneymar.addEventListener('click', neymar)
btcr7.addEventListener('click', cr7)
btpulga.addEventListener('click', pulga)

//FUNÇÕES

function neymar(){
    x.src = 'img/Ney.jpg'
    
}


function cr7(){
    x.src = 'img/SIIUUUUUUU.jpg'
    
}


function pulga(){
    x.src = 'img/pulga.jpg'

}