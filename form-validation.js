const submitBtn = document.querySelector('#submit-btn');
const validEmail = (mail) => {
    if (mail.match("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/")){
        return true;
    }
    return false;
};
submitBtn.addEventListener('click', (event) => {
    const validatedEmail = document.getElementById('mail').value;
    if(!validEmail(validatedEmail)){
        document.querySelector('#mail-message').innerHTML= "Please type the email in lowercase";
        event.preventDefault();
    }
})






















