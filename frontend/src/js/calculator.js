const boxes = document.querySelectorAll('.menu-box');
    const contents = document.querySelectorAll('.calc-content');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        boxes.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        box.classList.add('active');
        document.getElementById(box.dataset.target).classList.add('active');
    });
});

function calcularDAS() {
    const valor = document.getElementById("atividade").value;
    document.getElementById("resultado-das").innerText = `Valor do DAS: R$ ${valor},00`;
}

function calcularMulta() {
    const original = parseFloat(document.getElementById("valorOriginal").value);
    const meses = parseInt(document.getElementById("mesesAtraso").value);
    if (!isNaN(original) && !isNaN(meses)) {
        const multa = original * 0.02; // 2%
        const juros = original * 0.01 * meses; // 1% ao mês
        const total = original + multa + juros;
        document.getElementById("resultado-atraso").innerText = `Valor com multa e juros: R$ ${total.toFixed(2)}`;
    }
}

function calcularFaturamento() {
    const valor = parseFloat(document.getElementById("faturamento").value);
    const limite = 81000;
    if (!isNaN(valor)) {
        const restante = limite - valor;
        const mensagem = restante >= 0 ? `Você ainda pode faturar R$ ${restante.toFixed(2)}.` : `Você ultrapassou o limite em R$ ${Math.abs(restante).toFixed(2)}.`;
        document.getElementById("resultado-faturamento").innerText = mensagem;
    }
}

function calcularINSS() {
    const meses = parseInt(document.getElementById("mesesContribuidos").value);
    const totalPago = meses * 66; // valor de INSS aproximado para MEI
    document.getElementById("resultado-inss").innerText = `Total contribuído: R$ ${totalPago.toFixed(2)}`;
}