const inputadultos = document.getElementById('adultos');
const inputcriancas = document.getElementById('criancas');
const inputduracao = document.getElementById('duracao');

const resultado = document.getElementById('resultado')
const modal = document.querySelector('dialog')
const close = document.querySelector('dialog button')

function closeModal() {
    modal.close()
}

function soma() {
    const adultos = inputadultos.value;
    const criancas = inputcriancas.value;
    const duracao = inputduracao.value;

    if (adultos, criancas == "") {
        modal.show()
    } else {
        const qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
        const qtdTotalCerveja = cervejaPP(duracao) * adultos;
        const qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

        resultado.innerHTML = `<p class="result">Para um churrasco com <br>${adultos} Adultos <br>
        ${criancas} Crianças <br> Com uma duração de ${duracao} hrs!</p>`
        resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} Latas de Cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de Refrigerantes</p>`


        inputadultos.value = "";
        inputcriancas.value = "";
        inputduracao.value = "";
    }
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}