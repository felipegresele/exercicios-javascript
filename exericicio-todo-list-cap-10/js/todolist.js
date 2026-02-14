const input = document.getElementById("item-input");
const btn = document.getElementById("add-item");
const lista = document.querySelector(".todo-list__container");

const tarefas = [];

salvarTarefasLocalStorage();
listarTarefas()

const form = document.getElementById("todo-add")

form.addEventListener("submit", adicionarTarefa);



function adicionarTarefa(event) {
    event.preventDefault(); // impede o reload do form

    const inputValue = input.value.trim();
    if (inputValue === "") return;

    tarefas.push({
        id: Math.floor(Math.random() * 100) + 1,
        nome: inputValue,
        concluida: false,
});
    input.value = "";

    salvarTarefasLocalStorage();
    listarTarefas();
    console.log(tarefas)
}

function listarTarefas() {
    lista.innerHTML = ""; // limpa antes de renderizar

    tarefas.forEach((tarefa) => {
        const div = document.createElement("div");

        div.style.background = "gray";
        div.style.color = "white";
        div.style.padding = "2px";
        div.style.marginTop = "5px";
        div.style.marginBottom = "5px";

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.concluida //quando estiver checked a tarefa vai ser concluida;

        checkbox.addEventListener("change", () => {
            tarefa.concluida = checkbox.checked;
            salvarTarefasLocalStorage();
            listarTarefas();
        })

         const span = document.createElement("span");
        span.textContent = tarefa.nome;

        if (tarefa.concluida) {
            span.style.textDecoration = "line-through";
            span.style.opacity = "0.6";
        }

        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";

        btnEditar.addEventListener("click", () => {
            const novoNome = prompt("Editar tarefa:", tarefa.nome);
            if (novoNome && novoNome.trim() !== "") {
                tarefa.nome = novoNome.trim();
                salvarTarefasLocalStorage()
                listarTarefas();
            }
        });

        //excluir
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";

        btnExcluir.addEventListener("click", () => {
            const index = tarefas.findIndex(t => t.id === tarefa.id);
            tarefas.splice(index, 1);
            salvarTarefasLocalStorage();
            listarTarefas();
        });


        div.appendChild(checkbox);
        div.appendChild(span);
        div.appendChild(btnEditar);
        div.appendChild(btnExcluir);

        lista.appendChild(div);
    });
}

function salvarTarefasLocalStorage() {
    localStorage.getItem("tarefas", JSON.stringify(tarefas));
}

function carregarTarefas() {
    const dados = localStorage.getItem("tarefas")
    if (!dados) return;

    const tarefasSalvas = JSON.parse(dados);
    tarefas.push(...tarefasSalvas)
}