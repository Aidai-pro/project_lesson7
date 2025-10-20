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
        phoneSpan.style.color = '#7FFF00';
    } else {
        phoneSpan.innerHTML = 'Этот номер не существует';
        phoneSpan.style.color = '#800000';
    }
});