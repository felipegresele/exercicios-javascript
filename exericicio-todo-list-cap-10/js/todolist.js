
const input = document.getElementById("item-input");
const btn = document.getElementById("add-item");
const lista = document.getElementById("todo-list__container");
const mensagem = document.getElementById("mensagem")

const tarefas = [];

const form = document.getElementById("todo-add")

listarTarefas()

form.addEventListener("submit", function(event) {
    event.preventDefault(); //nao deixa dar refresh ao dar submit no formulario

    const inputValue = input.value;

    if (inputValue === "") {
        mensagem.style.color = "white"
        mensagem.style.padding = 2
        mensagem.style.background = "gray"
        mensagem.innerHTML = "Adicione o nome da tarefa"
        return
    }

    tarefas.push({
        id: Math.floor(Math.random() * 100),
        nome: inputValue,
        concluida: false,
    })

    console.log(tarefas)

    input.value = "" //deixa o campo do input vazio


    listarTarefas();

})

function listarTarefas() {
    lista.innerHTML = "";
    
    tarefas.forEach((tarefa, index) => {
        const div = document.createElement("div")

        div.style.display = "flex"
        div.style.justifyContent = "space-between"
        div.style.padding = "10px"

        const tituloStyle = tarefa.concluida 
            ? "text-decoration: line-through; opacity: 0.6;" 
            : ""

        div.innerHTML = `
        <div>
            <input type="checkbox" 
                ${tarefa.concluida ? "checked" : ""} 
                onclick="alternarConcluida(${index})"
            >

            <span style="${tituloStyle}">
                ${tarefa.nome}
            </span>
        </div>

        <div>
            <button onclick="editarTarefa(${index})">
                <i class="fas fa-edit"></i>
            </button>
            <button onclick="excluirTarefa(${index})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        `

        lista.appendChild(div)
    })
}

function alternarConcluida(index) {
    tarefas[index].concluida = !tarefas[index].concluida
    listarTarefas()
}

function editarTarefa(id) {

    lista.innerHTML = ""

    tarefas.forEach((tarefa, index) => {
        const div = document.createElement("div")
        
        div.style.display = "flex"
        div.style.justifyContent = "space-between"
        div.style.padding = 10

        if (index === id) {

            const inputNovoTitulo = document.createElement("input")
            inputNovoTitulo.value = tarefa.nome;

            inputNovoTitulo.style.height = 15
            inputNovoTitulo.style.backgroundColor = "yellow"

            const btnSalvar = document.createElement("button")
            btnSalvar.innerHTML = "Salvar"

            btnSalvar.onclick = function() {
                tarefas[index].nome = inputNovoTitulo.value
                listarTarefas()
            }
            
            div.appendChild(inputNovoTitulo)
            div.appendChild(btnSalvar)
        }

         else {

            div.innerHTML = `
                <h3>Id: ${tarefa.id}</h3>
                <h3>Titulo: ${tarefa.nome}</h3>
                <div>
                    <button onclick="editarTarefa(${index})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="excluirTarefa(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        }

        lista.appendChild(div);
    })

}

function excluirTarefa(id) {
    const confirmar  = confirm("Tem certeza que deseja excluir esta tarefa")

    if (confirmar) {
        tarefas.splice(id,1) //tira o id e 1 elemento
        listarTarefas()
        console.log(tarefas)
    }
}