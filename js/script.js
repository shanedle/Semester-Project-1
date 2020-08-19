document.getElementById('contact-submit').addEventListener('click', function (e) {
    e.preventDefault();
    //REGEX VARIABLES
    const regExPhone = /^(0047|\+47|47)?[2-9]\d{7}$/
    const regExEmail = /^[^@]+@[^@]+\.[^@]+$/;

    //INPUT VARIABLES
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    //ERROR VARIABLES
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    checkName();
    checkPhone();
    checkEmail();
    checkMessage();

    function checkName() {
        if (name === '') {
            nameError.style.display = 'block';
            return false;
        } else {
            nameError.style.display = 'none';
            return true;
        }
    }

    function checkPhone() {
        if (phone.match(regExPhone)) {
            phoneError.style.display = 'none';
            return true;
        } else {
            phoneError.style.display = 'block';
            return false;
        }
    }

    function checkEmail() {
        if (email.match(regExEmail)) {
            emailError.style.display = 'none';
            return true;
        } else {
            emailError.style.display = 'block';
            return false;
        }
    }

    function checkMessage() {
        if (message.length >= 20) {
            messageError.style.display = 'none';
            return true;
        } else {
            messageError.style.display = 'block';
            return false;
        }
    }
})