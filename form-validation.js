// ======================= Form Validation ===================================

const submitBtn = document.querySelector('#submit-btn');
const validEmail = (email) => {
  if (email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/)) {
    return true;
  }
  return false;
};
submitBtn.addEventListener('click', () => {
  const validatedEmail = document.getElementById('email').value;
  if (!validEmail(validatedEmail)) {
    document.querySelector('.lable').innerHTML = 'Please type the email in lowercase';
  }
});