const submitBtn = document.querySelector('#submit-btn');
const validEmail = (mail) => {
    if (mail.match("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/")){
        return true;
    }
    return false;
};





















