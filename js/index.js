let ListaTarefas = new Array();


function GetGreatestId() {
    try {
        return Math.max.apply(Math, ListaTarefas.map(row => row.Id));
    }
    catch {
        return 0;
    }
}

function AdicionarTarefa() {
    const valorInput = document.getElementById("input-tarefa").value;
    if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
        const id = ListaTarefas.length > 0 ? GetGreatestId() + 1 : 0;
        ListaTarefas.push({ Id: id, Tarefa: valorInput });
        document.getElementById("lista-tarefas-body").innerHTML += `<tr id="${id}">
        <td class="col-1"><i class="bi bi-circle" onClick="MarcarTarefa(this)"></i></td>
        <td class="fw-bold col">${valorInput}</td>
        <td class="col-1"><button class="btn btn-danger" onClick="RemoverTarefa(this)">Remover</button></td>
    </tr>`
        document.getElementById("input-tarefa").value = "";
        document.getElementById("input-tarefa").focus();
    }
}

function MarcarTarefa(tarefa) {
    let parentRow = tarefa.closest('tr');
    if (parentRow.classList.contains('item-checked')) {
        parentRow.classList.remove('item-checked');
        tarefa.classList.replace('bi-check-circle-fill', 'bi-circle')
        document.getElementById('lista-tarefas-body').prepend(tarefa.closest('tr'));
    }
    else {
        parentRow.classList.add('item-checked');
        tarefa.classList.replace('bi-circle', 'bi-check-circle-fill');
        const dataRow = tarefa.closest('tr');
        document.getElementById("lista-tarefas-body").appendChild(dataRow);
    }
}

function RemoverTarefa(tarefa) {
    let row = tarefa.closest('tr');
    ListaTarefas.splice((ListaTarefas.findIndex(i => i.Id == row.id)), 1);
    row.remove();
}


