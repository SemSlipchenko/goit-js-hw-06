const inputEL = document.getElementById('validation-input');

inputEL.addEventListener('blur', () => { 
    
    if (inputEL.value.length === Number(inputEL.dataset.length)) {
        inputEL.classList.add("valid");
        inputEL.classList.remove("invalid");
    } else { 
        inputEL.classList.add("invalid");
        inputEL.classList.remove("valid");
    };
});