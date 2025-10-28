// const phoneInput = document.querySelector('#phone_input');
// const phoneButton = document.querySelector('#phone_button');
// const phoneSpan = document.querySelector('#phone_result');
// // Метод querySelector ищет первый элемент в документе, который совпадает с указанным CSS-селектором. 
// // В данном случае селектор #phone_input — это элемент с id="phone_input". 
// // Если такой элемент найден, метод возвращает его; если нет — возвращает null.

// const reqExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

// phoneButton.addEventListener('click', () => {
//     if (reqExp.test(phoneInput.value)) {
//         phoneSpan.innerHTML = 'Этот номер существует';
//         phoneSpan.style.color = '#7FFF00';
//     } else {
//         phoneSpan.innerHTML = 'Этот номер не существует';
//         phoneSpan.style.color = '#800000';
//     }
// });

const phoneInput = document.querySelector('#phone_input_for_russian');
const phoneButton = document.querySelector('#phone_button_for_russian');
const phoneSpan = document.querySelector('#phone_result_for_russian');

const reqExp = /^\+7 [992]\d{2} \d{3}-\d{2}-\d{2}$/;

phoneButton.addEventListener('click', () => {
    if (reqExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = 'Этот номер существует';
        phoneSpan.style.color = '#60bd03ff';
    } else {
        phoneSpan.innerHTML = 'Этот номер не существует';
        phoneSpan.style.color = '#d11616ff';
    }
});

//TAB SLIDER
// Получаем все необходимые элементы DOM
const tabsContentCards = document.querySelectorAll(".tab_content_block");
const tabsItems = document.querySelectorAll(".tab_content_item");
const tabsItemsParents = document.querySelector(".tab_content_items");

// Функция скрывает все блоки контента и снимает активный класс со всех вкладок
const hideTabsContentCards = () => {
    // Проходим по всем карточкам и скрываем их (устанавливаем display: none)
    tabsContentCards.forEach(card => {
        card.style.display = 'none';
    });
    // Проходим по всем вкладкам и убираем класс активности
    tabsItems.forEach(item => {
        item.classList.remove('tab_content_item_active');
    });
};


// Функция показывает конкретную вкладку и делает её активной
const showTabsContentCards = (index = 0) => {
    // Проверяем, существует ли элемент с данным индексом
    if (tabsContentCards[index]) {
        // Показываем карточку с индексом index, используя 'flex' для правильного макета
        tabsContentCards[index].style.display = 'flex';
        // Добавляем класс активности вкладке с этим же индексом
        tabsItems[index].classList.add('tab_content_item_active');
    }
};

// --- Инициализация при загрузке страницы ---
hideTabsContentCards(); // 1. Скрываем все вкладки
showTabsContentCards(); // 2. Показываем первую вкладку (JavaScript)

let currentIndex = 0;   // Переменная для отслеживания текущей активной вкладки
let intervalId;         // Переменная для хранения id интервала автослайдера


// Функция автослайдера — меняет вкладки циклически каждые 2 секунды
const startAutoSlider = () => {
    intervalId = setInterval(() => {
        hideTabsContentCards();            // Скрываем все карточки
        showTabsContentCards(currentIndex); // Показываем текущую
        // Вычисляем следующий индекс (циклически: 0, 1, 2, 3, 0, 1...)
        currentIndex = (currentIndex + 1) % tabsItems.length; 
    }, 2000); // 2000 миллисекунд = 2 секунды
};

startAutoSlider(); // Запускаем автослайдер при старте страницы


// --- Обработка кликов (Делегирование событий) ---
// Слушаем клики на родительском элементе вкладок
tabsItemsParents.onclick = (event) => {
    // Проверяем, что клик произошел именно на элементе вкладки
    if (event.target.classList.contains('tab_content_item')) {
        clearInterval(intervalId); // Останавливаем автослайдер при ручном клике

        // Ищем индекс вкладки, на которую кликнули
        tabsItems.forEach((tabItem, index) => {
            if (event.target === tabItem) { // Если кликнули именно на эту вкладку
                hideTabsContentCards();          // Скрываем все
                showTabsContentCards(index);     // Показываем выбранную
                currentIndex = index;            // Обновляем текущий индекс для возобновления автослайдера
                startAutoSlider();               // Снова запускаем автослайдер
            }
        });
    }
};



