const inputEl = document.querySelector('.input-el')
const plusBtn = document.querySelector('.btn_plus')
const ulEl = document.querySelector('.ul-el')

inputEl.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        const li = document.createElement("li")
    li.setAttribute('class', 'li-el')
        li.innerText = inputEl.value;
        
    const checkBtn = document.createElement("button")
    checkBtn.setAttribute('class', 'check-btn')
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.addEventListener('click', () => {
        li.classList.add('line-through')
    })

    const trashBtn = document.createElement("button")
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    trashBtn.addEventListener('click', () => {
        trashBtn.parentElement.remove()
    })    

    li.appendChild(checkBtn)
    li.appendChild(trashBtn)
    ulEl.appendChild(li)


    inputEl.value = ""
    inputEl.focus()
    }
})

plusBtn.addEventListener('click', () => {
    const li = document.createElement("li")
    li.setAttribute('class', 'li-el')
    li.innerText = inputEl.value

    const checkBtn = document.createElement("button")
    checkBtn.setAttribute('class', 'check-btn')
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.addEventListener('click', () => {
        li.classList.add('line-through')
    })

    const trashBtn = document.createElement("button")
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    trashBtn.addEventListener('click', () => {
        trashBtn.parentElement.remove()
    })

    li.appendChild(checkBtn)
    li.appendChild(trashBtn)
    ulEl.appendChild(li)


    inputEl.value = ""
    inputEl.focus()
})
