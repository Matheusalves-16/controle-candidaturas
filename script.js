let candidaturas =
JSON.parse(localStorage.getItem("candidaturas")) || [];

atualizarLista();

function adicionarCandidatura() {

    let vaga =
    document.getElementById("vaga").value;

    let empresa =
    document.getElementById("empresa").value;

    let data =
    document.getElementById("data").value;

    let hora =
    document.getElementById("hora").value;

    let status =
    document.getElementById("status").value;

    if (
        vaga === "" ||
        empresa === "" ||
        data === "" ||
        hora === ""
    ) {
        alert("Preencha todos os campos");
        return;
    }

    candidaturas.push({
        vaga,
        empresa,
        data,
        hora,
        status
    });

    salvarDados();
    atualizarLista();

    document.getElementById("vaga").value = "";
    document.getElementById("empresa").value = "";
    document.getElementById("data").value = "";
    document.getElementById("hora").value = "";
}

function atualizarLista() {

    let lista =
    document.getElementById("lista");

    lista.innerHTML = "";

    candidaturas.forEach((item, index) => {

        let li =
        document.createElement("li");

        let corStatus = "";

switch(item.status){
    case "Enviado":
        corStatus = "gold";
        break;

    case "Em análise":
        corStatus = "dodgerblue";
        break;

    case "Entrevista":
        corStatus = "orange";
        break;

    case "Aprovado":
        corStatus = "green";
        break;

    case "Reprovado":
        corStatus = "red";
        break;
}

        li.innerHTML = `
            <strong>${item.vaga}</strong><br>
            Empresa: ${item.empresa}<br>
            Data: ${item.data}<br>
            Horário: ${item.hora}<br>
            Status:
<span style="color:${corStatus}; font-weight:bold;">
    ${item.status}
</span>

            <button onclick="removerCandidatura(${index})">
                Excluir
            </button>
        `;

        lista.appendChild(li);
    });

    document.getElementById("contador")
        .textContent = candidaturas.length;
}

function removerCandidatura(index) {

    candidaturas.splice(index, 1);

    salvarDados();
    atualizarLista();
}

function salvarDados() {

    localStorage.setItem(
        "candidaturas",
        JSON.stringify(candidaturas)
    );
}