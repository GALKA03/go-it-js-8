import throttle from 'lodash.throttle';

const MESSAGE = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
//console.log('form:',form)
const message = document.querySelector('.feedback-form textarea')
//console.log('massage:',message)
const email = document.querySelector('.feedback-form input')
form.addEventListener('input', throttle(onDataForm, 500));




const formData = {};
//dataFromLocalStorage();
//console.log('email:',email)
form.addEventListener('submit', onFormSubmit);
//message.addEventListener('input',throttle(onTexteriaInput, 500));
//email.addEventListener('input', throttle(onEmailInput, 500));


function onDataForm(e) {
    
    formData[e.target.name] = e.target.value;
    console.log(formData)
localStorage.setItem(MESSAGE, JSON.stringify(formData))
   

}


//populateMassageTexteria();
function onFormSubmit(e) {
  JSON.parse(localStorage.getItem(MESSAGE))
    e.preventDefault();
    console.log('отправили fорму');
    e.currentTarget.reset();
    localStorage.removeItem(MESSAGE)
   
    
}


// function onTexteriaInput(e){
//     const valueMessege = e.target.value;
//     console.log(valueMessege)
// //     localStorage.setItem(MESSAGE, valueMessege)
//  }

// function onEmailInput(e) {
//     const valueEmail = e.target.value;
//     console.log(valueEmail)
// //     localStorage.setItem(EMAIL, valueEmail)
//  }

(function populateMassageTexteria() {
  let savedMassage = JSON.parse(localStorage.getItem(MESSAGE));
//localStorage.removeItem(MESSAGE)
    if (savedMassage) {
        message.value = savedMassage
     email.value = savedMassage.email;
  message.value = savedMassage.message;
    }
})()
