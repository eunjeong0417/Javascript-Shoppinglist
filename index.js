const inputEl = document.querySelector('.input-el')
const plusBtn = document.querySelector('.btn_plus')
const ulEl = document.querySelector('.ul-el')


plusBtn.addEventListener('click', onAdd)

inputEl.addEventListener("keypress", (e) => {
//keypress 이벤트
//13은 엔터키의 코드를 의미한다
//엔터키가 눌려지고 input의 값이 있다면 onAdd 함수를 실행
    if (e.keyCode === 13 && inputEl.value) {
        onAdd()       
    } else {
        alert('쇼핑목록을 입력하세요')
        inputEl.focus()
//input에 focus를 넣어준다
    }
})




function onAdd () {

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
        li.remove()
    })
    
      
    const arrowBtn = document.createElement("button")
    arrowBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
    arrowBtn.setAttribute('class', 'arrowBtn')
    
        const divEl = document.createElement("div")
        divEl.setAttribute('class', 'divEl')

//div태그에 각각의 버튼을 넣어준다
    divEl.appendChild(checkBtn)
    divEl.appendChild(trashBtn)
    divEl.appendChild(arrowBtn)
        
//div태그를 list태그에 넣는다
    li.appendChild(divEl)
  
//마지막으로 ul태그에 list태그를 넣어준다
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

}
    
