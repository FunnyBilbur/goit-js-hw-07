const login_form = document.querySelector('.login-form');
// console.dir(login_form);
login_form.addEventListener('submit', onSubmitFunct);

function onSubmitFunct(params) {
    params.preventDefault();//сбрасываем стандартные свойства для сабмита формы, которая перебрасывает на отдельное окно
    const { email, password } = params.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        alert('All form fields must be filled in');
    } else {
        const data = {
            email: email.value.trim(),
            password: password.value.trim(),
        }
        console.log(data);
    }
    params.currentTarget.reset();
}
