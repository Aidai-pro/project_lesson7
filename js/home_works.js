// const input = document.getElementById('gmail_input');
// const button = document.getElementById('gmail_button');
// const result = document.getElementById('gmail_result');

// const gmailRegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

// button.addEventListener('click', () => {
//     const value = input.value.trim();
//     if (gmailRegExp.test(value)) {
//         result.textContent = 'Почта верна';
//         result.style.color = "#7FFF00";
//     } else {
//         result.textContent = 'Почта не верна';
//         result.style.color = "#800000";
//     }
// });


// Для ИИН
const input = document.getElementById('gmail_input_iin');
const button = document.getElementById('gmail_button_iin');
const result = document.getElementById('gmail_result_iin');

const iinRegExp = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{6}$/;

button.addEventListener('click', () => {
    const value = input.value.trim();
    if (iinRegExp.test(value)) {
        result.textContent = 'ИИН верен !';
        result.style.color = "#64ac1dff";
    } else {
        result.textContent = 'ИИН не верен.Повторите попытку!';
        result.style.color = "#c41313ff";
    }
});
