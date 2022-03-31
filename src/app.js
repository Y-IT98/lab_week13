const Div_event = document.querySelectorAll('.original-container div')
const Area_copied = document.querySelector ('.copy-container')


Div_event.forEach(element => element.addEventListener('click',(evt) => {
    let material_cloned = evt.target.parentElement.outerHTML ;
    Area_copied.insertAdjacentHTML ("beforeend", cloneMaterial);
}))

