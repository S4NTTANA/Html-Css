// DOM

const lampada = document.querySelector('#lampada')
const bt_acender = document.querySelector('#bt_acender')
const bt_apagar = document.querySelector('#bt_apagar')

// EVENTO
bt_acender.addEventListener('click', acender)
bt_apagar.addEventListener('click', apagar)

// Função

function acender () {
    lampada.src = 'images/lampada-acesa.png'
}

function apagar () {
    lampada.src = 'images/lampada-apagada.png'
}