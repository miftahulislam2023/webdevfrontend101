// console.log(document.querySelector('h1'))
// console.log(document.querySelectorAll('h1'))
// console.log(document.querySelectorAll('h2'))
/*
h2  = document.querySelectorAll('h2')
for(el of h2)
    console.log(el.innerText)

console.log('H3')

h3  = document.querySelectorAll('h3')
for(el of h3)
    console.log(el.innerText)
*/

// console.log(document.getElementsByTagName('h2'))
// console.log(document.getElementById('dom-core').innerText)

// console.log(document.querySelector('#dom-core').innerText)

console.log(document.querySelectorAll('h3')[4])
document.querySelectorAll('h3')[4].innerHTML = `
<h1 style='color: red'>Ok OK Ok</h1>
`
/*
querySelector
querySelectorAll
getElementsById
getElementsByTagName
*/

document.get