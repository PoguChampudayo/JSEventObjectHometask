dropDownItems = Array.from(document.querySelectorAll('.dropdown__item'))
dropDownValue = document.querySelector('.dropdown__value')

function openList() {
    document.querySelector('.dropdown__list').className = 'dropdown__list dropdown__list_active'
}

function closeList() {
    document.querySelector('.dropdown__list_active').className = 'dropdown__list'
}

dropDownValue.onclick = openList
dropDownItems.forEach(element => {
    element.onclick = () => {
        dropDownValue.textContent = element.textContent
        closeList()
        return false
    }
});