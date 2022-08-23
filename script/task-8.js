const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) { 
    event.preventDefault();
    if (event.currentTarget.elements.email.value === "" ||
        event.currentTarget.elements.password.value === "") { 
        return alert('все поля должны быть заполнены');
    };
    console.log(event.currentTarget.elements.email.value,
        event.currentTarget.elements.password.value);
    form.reset();
}