form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)

ol = document.querySelector('ol')

function createListItem(item) {
    li = document.createElement('li')
    outerSpan = document.createElement('span')
    innerSpan = document.createElement('span')
    crossIcon = document.createElement('i')
    crossIcon.classList.add('fa-solid')
    crossIcon.classList.add('fa-circle-xmark')
    innerSpan.textContent = `${item}`
    li.appendChild(outerSpan)
    outerSpan.appendChild(innerSpan)
    outerSpan.appendChild(crossIcon)
    ol.appendChild(li)
}

// function handleSubmit(e) {
//     // console.log(e.target)
//     console.log(e.target[0].value)
//     e.preventDefault()
//     ol.innerHTML = `
//     <li>
//     <span>
//     <span>${e.target[0].value}</span><i class="fa-solid fa-circle-xmark"></i>
//     </span>
//     </li>
//     `
//     e.target.reset()
// }
function handleSubmit(e) {
    // console.log(e.target)
    console.log(e.target[0].value)
    e.preventDefault()
    createListItem(e.target[0].value)
    e.target.reset()
}

