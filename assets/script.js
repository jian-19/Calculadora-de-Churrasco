const inputadultos = document.getElementById('adultos');
const inputcriancas = document.getElementById('criancas');
const inputduracao = document.getElementById('duracao');
const inputconsomemalcool = document.getElementById('alcool')
const inputconsomemrefri = document.getElementById('refrigerante')


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
    const consomemalcool = inputconsomemalcool.value;
    const consomemrefri = inputconsomemrefri.value;

    if (adultos == "" && criancas == "" && duracao == "" && consomemalcool == "" && consomemrefri == "") {
        modal.show()
    } else if (adultos == "" && criancas == "") {
        const adultos = "0";
        const criancas = "0";
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
        inputconsomemalcool.value = "";
        inputconsomemrefri.value = "";

    } else if (criancas == "" && duracao == "" && consomemrefri == "") {
        const consomemrefri = "0";
        const qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
        const qtdTotalCerveja = cervejaPP(duracao) * consomemalcool;

        resultado.innerHTML = `<p class="result">Para um churrasco com <br>${adultos} Adultos <br>
        ${criancas} Crianças <br> Com uma duração de ${duracao} hrs!</p>`
        resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} Latas de Cerveja</p>`


        inputadultos.value = "";
        inputcriancas.value = "";
        inputduracao.value = "";
        inputconsomemalcool.value = "";
        inputconsomemrefri.value = "";

    } else if (adultos == "" && duracao == "" && consomemalcool == "") {
        const consomemalcool = "0";
        const adultos = "0";
        const duracao = "0";
        const qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
        const qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

        resultado.innerHTML = `<p class="result">Para um churrasco com <br>${adultos} Adultos <br>
        ${criancas} Crianças <br> Com uma duração de ${duracao} hrs!</p>`
        resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de Refrigerantes</p>`


        inputadultos.value = "";
        inputcriancas.value = "";
        inputduracao.value = "";
        inputconsomemalcool.value = "";
        inputconsomemrefri.value = "";

    } else if (criancas == "" && duracao == "") {
        const criancas = "0";
        const duracao = "0";
        const qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
        const qtdTotalCerveja = cervejaPP(duracao) * adultos;
        const qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

        resultado.innerHTML = `<p class="result">Para um churrasco com <br>${adultos} Adultos <br>
        ${criancas} Crianças</p>`
        resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} Latas de Cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de Refrigerantes</p>`


        inputadultos.value = "";
        inputcriancas.value = "";
        inputduracao.value = "";
        inputconsomemalcool.value = "";
        inputconsomemrefri.value = "";

    } else if (adultos == "" && duracao == "") {
        const duracao = "0";
        const adultos = "0";
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
        inputconsomemalcool.value = "";
        inputconsomemrefri.value = "";

    } else if (criancas == "" && consomemrefri == "") {
        const criancas = "0"
        const consomemrefri = "0";
        const qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
        const qtdTotalCerveja = cervejaPP(duracao) * consomemalcool;

        resultado.innerHTML = `<p class="result">Para um churrasco com <br>${adultos} Adultos <br>
        ${criancas} Crianças <br> Com uma duração de ${duracao} hrs!</p>`
        resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} Latas de Cerveja</p>`


        inputadultos.value = "";
        inputcriancas.value = "";
        inputduracao.value = "";
        inputconsomemalcool.value = "";
        inputconsomemrefri.value = "";

    } else if (consomemalcool == "" && consomemrefri == "") {
        const consomemalcool = "0";
        const consomemrefri = "0";
        const qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);

        resultado.innerHTML = `<p class="result">Para um churrasco com <br>${adultos} Adultos <br>
        ${criancas} Crianças <br> Com uma duração de ${duracao} hrs!</p>`
        resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`

        inputadultos.value = "";
        inputcriancas.value = "";
        inputduracao.value = "";
        inputconsomemalcool.value = "";
        inputconsomemrefri.value = "";

    } else if (consomemalcool == "") {
        const consomemalcool = "0";
        const qtdTotalBebidas = bebidasPP(duracao) * consomemrefri + (bebidasPP(duracao) / 2 * criancas);
        const qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);

        resultado.innerHTML = `<p class="result">Para um churrasco com <br>${adultos} Adultos <br>
        ${criancas} Crianças <br> Com uma duração de ${duracao} hrs!</p>`
        resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de Refrigerantes</p>`

        inputadultos.value = "";
        inputcriancas.value = "";
        inputduracao.value = "";
        inputconsomemalcool.value = "";
        inputconsomemrefri.value = "";

    } else if (adultos == "") {
        const adultos = "0"
        const qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
        const qtdTotalBebidas = bebidasPP(duracao) * consomemrefri + (bebidasPP(duracao) / 2 * criancas);

        resultado.innerHTML = `<p class="result">Para um churrasco com <br>${adultos} Adultos <br>
        ${criancas} Crianças <br> Com uma duração de ${duracao} hrs!</p>`
        resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de Refrigerantes</p>`


        inputadultos.value = "";
        inputcriancas.value = "";
        inputduracao.value = "";
        inputconsomemalcool.value = "";
        inputconsomemrefri.value = "";

    } else if (criancas == "") {
        const criancas = "0";
        const qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
        const qtdTotalCerveja = cervejaPP(duracao) * consomemalcool;
        const qtdTotalBebidas = bebidasPP(duracao) * consomemrefri + (bebidasPP(duracao) / 2 * criancas);

        resultado.innerHTML = `<p class="result">Para um churrasco com <br>${adultos} Adultos <br>
        ${criancas} Crianças <br> Com uma duração de ${duracao} hrs!</p>`
        resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} Latas de Cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de Refrigerantes</p>`


        inputadultos.value = "";
        inputcriancas.value = "";
        inputduracao.value = "";
        inputconsomemalcool.value = "";
        inputconsomemrefri.value = "";

    } else if (duracao == "") {
        const duracao = "0";
        const qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
        const qtdTotalCerveja = cervejaPP(duracao) * consomemalcool;
        const qtdTotalBebidas = bebidasPP(duracao) * consomemrefri + (bebidasPP(duracao) / 2 * criancas);

        resultado.innerHTML = `<p class="result">Para um churrasco com <br>${adultos} Adultos <br>
        ${criancas} Crianças</p>`
        resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} Latas de Cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de Refrigerantes</p>`


        inputadultos.value = "";
        inputcriancas.value = "";
        inputduracao.value = "";
        inputconsomemalcool.value = "";
        inputconsomemrefri.value = "";

    } else if (consomemrefri == "") {
        const consomemrefri = "0";
        const criancas = "0";
        const duracao = "0";
        const qtdTotalCerveja = cervejaPP(duracao) * consomemalcool;
        const qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);

        resultado.innerHTML = `<p class="result">Para um churrasco com <br>${adultos} Adultos <br>
        ${criancas} Crianças <br> Com uma duração de ${duracao} hrs!</p>`
        resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} Latas de Cerveja</p>`

        inputadultos.value = "";
        inputcriancas.value = "";
        inputduracao.value = "";
        inputconsomemalcool.value = "";
        inputconsomemrefri.value = "";

    } else {
        const qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
        const qtdTotalCerveja = cervejaPP(duracao) * consomemalcool;
        const qtdTotalBebidas = bebidasPP(duracao) * consomemrefri + (bebidasPP(duracao) / 2 * criancas);

        resultado.innerHTML = `<p class="result">Para um churrasco com <br>${adultos} Adultos <br>
        ${criancas} Crianças <br> Com uma duração de ${duracao} hrs!</p>`
        resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} Latas de Cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de Refrigerantes</p>`

        inputadultos.value = "";
        inputcriancas.value = "";
        inputduracao.value = "";
        inputconsomemalcool.value = "";
        inputconsomemrefri.value = "";
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
        return 2700;
    } else {
        return 2000;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1000;
    } else {
        return 1000;
    }
}