
let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.style.backgroundColor = button.id;
    button.addEventListener('click', (e) => {
        document.body.style.backgroundColor = e.target.id;
    })
})

