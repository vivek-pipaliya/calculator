const display = document.querySelector('input');
const button = document.querySelectorAll('.btn');

button.forEach(function (button) {
    button.addEventListener('click', function () {
        const buttonValue = button.innerText;
        // console.log(buttonValue);
        display.value += buttonValue;
        // console.log(display.value)

        // AC to clear all input field
        if(buttonValue === "AC"){
            display.value = "";
        }


    });
});

