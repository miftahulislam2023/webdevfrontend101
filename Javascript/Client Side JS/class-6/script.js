fifthLi = document.createElement('li')
text = document.createTextNode('6')
fifthLi.appendChild(text)
ul = document.querySelector('ul')
ul.appendChild(fifthLi)
console.log(ul.children)

// const insertAfterIndex = 0;
// const referenceElement = ul.children[insertAfterIndex + 1];
// ul.insertBefore(fifthLi, referenceElement);
const secondLi = ul.children[2];
secondLi.insertAdjacentElement('afterend', fifthLi);