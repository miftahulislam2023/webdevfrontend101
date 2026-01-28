form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)
ol = document.querySelector('ol')
ol.addEventListener('click', handleDelete)
ol.addEventListener('click', handleEdit)
todos = [
    // 'Apple'
    // 'Take a nap',
    // 'Pray Salah'
]

function renderListItems() {
    todoList = todos.map((todo) => {
        li = document.createElement('li')
        outerSpan = document.createElement('span')
        innerSpan = document.createElement('span')
        innerSpan.classList.add('inner-span')
        // innerSpan.contentEditable="true"
        crossIcon = document.createElement('i')
        crossIcon.classList.add('fa-solid')
        crossIcon.classList.add('fa-circle-xmark')
        innerSpan.textContent = `${todo}`
        li.appendChild(outerSpan)
        outerSpan.appendChild(innerSpan)
        outerSpan.appendChild(crossIcon)
        return li
    })
    ol.innerHTML = ''
    todoList.map(todo => {
        ol.appendChild(todo)
    })
}

function addListItem(item) {
    todos.push(item)
    renderListItems()
}

function removeListItem(item) {
    todos = todos.filter(
        todo => todo != item
    )
    renderListItems()
    // index = todos.indexOf(item)
    // todos.splice(index, 1)
}

function handleSubmit(e) {
    e.preventDefault()
    addListItem(e.target[0].value)
    e.target.reset()
}

function handleDelete(e) {
    if (e.target.tagName == 'I' && e.target.classList[1] == 'fa-circle-xmark') {
        removeListItem(e.target.previousElementSibling.textContent)
    }
}

function handleEdit(e) {
    if (e.target.tagName == 'SPAN' && e.target.classList[0] == 'inner-span') {
        // e.target.contentEditable = 'true'
        e.target.nextElementSibling.classList.remove('fa-circle-xmark')
        e.target.nextElementSibling.classList.add('fa-circle-check')
        item = e.target.textContent
        // console.log(item)
        input = document.createElement('input')
        input.value = item
        e.target.style.display = 'none'
        e.target.insertAdjacentElement('afterend', input)
        e.target.nextElementSibling.nextElementSibling.addEventListener('click', () => {
            e.target.nextElementSibling.nextElementSibling.classList.remove('fa-circle-check')
            e.target.nextElementSibling.nextElementSibling.classList.add('fa-circle-xmark')
            e.target.textContent = input.value
            e.target.style.display = 'block'
            input.remove()
        })
    }
}

// renderListItems()
// removeListItem('Apple')
// renderListItems()