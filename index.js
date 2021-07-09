const inputEl = document.querySelector('.input-el')
const plusBtn = document.querySelector('.btn_plus')
const ulEl = document.querySelector('.ul-el')


inputEl.addEventListener("keypress", (e) => {
    if (e.keyCode === 13 && inputEl.value) {
        console.log('클릭')
    } else {
        alert('입력')
    }
})


plusBtn.addEventListener('click', () => {

//input value가 있으면 리스트에 추가하고
//없으면 alert창 띄운다
    if (inputEl.value) {

    const li = document.createElement("li")
//li 태그를 만든다
    li.setAttribute('class', 'li-el')
//만든 li태그에 li-el의 class 속성을 준다
    li.innerText = inputEl.value
//li태그 안에 입력받은 input의 value 값을 넣어준다


    const checkBtn = document.createElement("button")
    checkBtn.setAttribute('class', 'check-btn')
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.addEventListener('click', () => {
        li.classList.add('line-through')
    })


    const trashBtn = document.createElement("button")
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    trashBtn.setAttribute('class', 'trash-btn')
    trashBtn.addEventListener('click', () => {
        trashBtn.parentElement.remove()
    })
    

//만들어둔 버튼을 list 태그에 넣어준다
    li.appendChild(checkBtn)
    li.appendChild(trashBtn)
//버튼이 추가된 list 태그를 ul 태그에 넣어준다
    ulEl.appendChild(li)


    inputEl.value = ""
//입력을 한 뒤에는 input창을 비운다
    inputEl.focus()
//input에 focus를 시켜준다
        
    }
    else {
        alert('쇼핑목록을 입력하세요')
        inputEl.focus()
    }

})
    
