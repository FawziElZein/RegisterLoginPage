// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.validated-form')

    // Loop over them and prevent submission
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();


const togglePassword = document
    .querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', () => {
    const type = password
        .getAttribute('type') === 'password' ?
        'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});


const toggleRetypedPassword = document
    .querySelector('#toggleRetypedPassword');
const retypedPassword = document.querySelector('#retypedpassword');
toggleRetypedPassword.addEventListener('click', () => {
    const type = retypedPassword
        .getAttribute('type') === 'password' ?
        'text' : 'password';
    retypedPassword.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});