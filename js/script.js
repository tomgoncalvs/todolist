const addTarefa = document.querySelector('#add')
const addButton = document.querySelector('#salvar')

addTarefa.addEventListener('change', (event) => {
    const tarefa = event.target.value
})

addButton.addEventListener('click', (event) => {

    const tarefa = addTarefa.value

    if (tarefa) {
        const tarefaObj = {
            tarefa,
            Data: Date.now()
        }

        addTarefa.value = ''

        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

        tarefas.push(tarefaObj);

        localStorage.setItem('tarefas', JSON.stringify(tarefas))

        alert("Tarefa Adicionada com sucesso!")

        renderTarefas()
        
    }
})

document.addEventListener("DOMContentLoaded", function (event) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))
    console.log(tarefas)

    let item = ""

    tarefas.map( ( {tarefa, Data} ) => {
    item += `
        <div class="tarefa-adicionada">
          <input type="checkbox" name="" id="" />
          <p>${tarefa}</p>
          <button class="button">
            <i class="material-symbols-outlined"> edit </i>
          </button>
          <button class="button">
            <i class="material-symbols-outlined"> delete </i>
          </button>
        </div>
    `
    })

    document.querySelector('.container-tarefas').innerHTML = item
    

})

