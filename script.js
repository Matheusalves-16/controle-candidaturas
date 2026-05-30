let candidaturas = [];

function adicionarCandidatura(){

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

    if(
        vaga === "" ||
        empresa === "" ||
        data === "" ||
        hora === ""
    ){
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

    atualizarLista();
}

function atualizarLista(){

    let lista =
    document.getElementById("lista");

    lista.innerHTML = "";

    candidaturas.forEach(item => {

        let li =
        document.createElement("li");

        li.innerHTML = `
            <strong>${item.vaga}</strong><br>
            Empresa: ${item.empresa}<br>
            Data: ${item.data}<br>
            Horário: ${item.hora}<br>
            Status: ${item.status}
        `;

        lista.appendChild(li);
    });

    document.getElementById("contador")
    .textContent = candidaturas.length;
}