// Procurar o botão

document.querySelector("#add-time")
// Quando houver o click, executa uma ação
.addEventListener('click', cloneField)

// Ação de duplicar
function cloneField() {
    // Selecionar o campo que será duplicado e clonar.
    const newField = document.querySelector('.schedule-item').cloneNode(true)
    
    // Limpar os campos
    const fields = newField.querySelectorAll('input')

    fields.forEach(function(field){
        field.value = ""
    });

    // Selecionar onde colocar ele na página
    document.querySelector('#schedule-items').appendChild(newField)
}