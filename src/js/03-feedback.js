import throttle from 'lodash.throttle';

const MESSAGE = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
//console.log('form:',form)
const message = document.querySelector('.feedback-form textarea')
//console.log('massage:',message)
const email = document.querySelector('.feedback-form input')
form.addEventListener('input', throttle(onDataForm, 500));

const formData = {};

form.addEventListener('submit', onFormSubmit);


function onDataForm(e) {
    
    formData[e.target.name] = e.target.value;
    console.log(formData)
localStorage.setItem(MESSAGE, JSON.stringify(formData))
}

(function populateMassageTexteria() {
const savedMassage = JSON.parse(localStorage.getItem(MESSAGE));
//localStorage.removeItem(MESSAGE)
    if (savedMassage) {
        message.value = savedMassage
     email.value = savedMassage.email;
  message.value = savedMassage.message;
    }
})()

function onFormSubmit(e) {
 e.preventDefault();

    console.log(JSON.parse(localStorage.getItem(MESSAGE)))
   
    console.log('отправили fорму');
    e.currentTarget.reset();
    localStorage.removeItem(MESSAGE)
   
    
}


