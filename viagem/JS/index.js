const distancia = document.querySelector('#distancia');
const consumo = document.querySelector('#consumo');
const preco = document.querySelector('#preco');
const botao = document.querySelector('#botao');
const resultado = document.querySelector('#resultado');

botao.addEventListener('click', calcularViagem);

function calcularViagem() {
    const km = Number(distancia.value);
    const kmPorLitro = Number(consumo.value);
    const valorCombustivel = Number(preco.value);

    if (
        isNaN(km) || km <= 0 ||
        isNaN(kmPorLitro) || kmPorLitro <= 0 ||
        isNaN(valorCombustivel) || valorCombustivel <= 0
    ) {
        resultado.textContent = 'Preencha todos os campos corretamente.';
        return;
    }

    const valorTotal = (km / kmPorLitro) * valorCombustivel;
    resultado.textContent = `O valor total da viagem será R$ ${valorTotal.toFixed(2)}`;
}