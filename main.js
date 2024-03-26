const form = document.getElementById("form-atividade")
const imgAprovado = "<img src='./images/aprovado.png' alt='Emoji celebrando'"
const imgReprovado = "<img src='./images/reprovado.png' alt='Emoji triste'"
const atividades = [];
const notas = [];
const spanAprovado = "<span class='resultado aprovado'> Aprovado </span>"
const spanReprovado = "<span class='resultado reprovado'> Reprovado </span>"
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = "";

form.addEventListener("submit", function(cancelEvent){
    cancelEvent.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizarMedia();
});

function adicionarLinha(){
    const nomeAtividade = document.getElementById("nome-atividade")
    const notaAtividade = document.getElementById("nota-atividade")

    if (atividades.includes(nomeAtividade.value)) {
        alert (`A atividade ${nomeAtividade.value} já foi inserida`)
        
    } else {
        atividades.push(nomeAtividade.value);
        notas.push(parseFloat(notaAtividade.value));

        let linha = "<tr>"
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += "</tr>"

        linhas += linha;
}
    nomeAtividade.value = "";
    notaAtividade.value = "";
};

function atualizarTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
};

function atualizarMedia(){
    const mediaFinal = calcularMedia();

    document.getElementById("media-final").innerHTML = mediaFinal;
    document.getElementById("media-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calcularMedia(){
    let somarNota = 0;

    for (let i = 0; i < notas.length; i++) {
        somarNota += notas[i]
    }

    return somarNota / notas.length;
};