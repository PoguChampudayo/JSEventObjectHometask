tabs = document.querySelectorAll('.tab')
tabContents = document.querySelectorAll('.tab__content')

function chooseActive(index) {
    document.querySelector('.tab_active').className = 'tab';
    document.querySelector('.tab__content_active').className = 'tab__content';
    tabs[index].className = 'tab tab_active'
    tabContents[index].className = 'tab__content tab__content_active'
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(event) {
        switch (event.target.textContent.trim()) {
            case 'Главная': chooseActive(0); break;
            case 'Обо мне': chooseActive(1); break;
            case 'Контакты': chooseActive(2); break;
        }
    })
}