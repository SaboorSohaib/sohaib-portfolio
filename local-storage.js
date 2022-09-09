const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('#message');
const form = document.querySelector('form');
const body = document.querySelector('body');

const retrieveData = localStorage.getItem('user');


body.onload = ()=>{
    if(retrieveData){
        const serialize = JSON.parse(retrieveData);
        nameInput.value = serialize.name;
        email.value = serialize.email;
        msg.value = serialize.message;
    }
    else{
        alert("Nothing")
    }
     
}

document.querySelectorAll('.input').forEach(input => { input.addEventListener('input', (event)=>{
    event.preventDefault();

    //Get input field values
    const nameData = document.querySelector('#name').value;
    const emailData = document.querySelector('#email').value;
    const msgData = document.querySelector('#message').value;

    //Store values in object;
    const userData = {
        name: nameData,
        email: emailData,
        message: msgData
    }

    //store the object in localStorage

    localStorage.setItem("user", JSON.stringify(userData))

})})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
})