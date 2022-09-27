import throttle from 'lodash.throttle';

const MESSAGE = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
//console.log('form:',form)
const message = document.querySelector('.feedback-form textarea')
//console.log('massage:',message)
const email = document.querySelector('.feedback-form input')

form.addEventListener('submit', onFormSubmit);
// message.addEventListener('input', onMassageInput)
form.addEventListener('input', throttle(onDataForm, 500));// old job

    const formData =  {};

function onDataForm(e) {
    const dataSaved = JSON.parse(localStorage.getItem(MESSAGE));
    if (dataSaved) {
        dataSaved[e.target.name] = e.target.value;
        localStorage.setItem(MESSAGE, JSON.stringify(dataSaved))
        return
    }
    formData[e.target.name] = e.target.value;
    localStorage.setItem(MESSAGE, JSON.stringify(formData)) 
}
(function populateMassageTexteria() {
const savedMassage = JSON.parse(localStorage.getItem(MESSAGE));
//localStorage.removeItem(MESSAGE)
    if (savedMassage) {
        email.value = savedMassage.email  || "";
        message.value = savedMassage.message  || "";  
    }
}
)()

function onFormSubmit(e) {
    e.preventDefault();
     console.log(JSON.parse(localStorage.getItem(MESSAGE)));
    e.currentTarget.reset();
    localStorage.removeItem(MESSAGE)  
    
}





// form.addEventListener('submit', onFormSubmit);

// let formData = {};
// populateTextArea();
// form.addEventListener('input', (e) => {
    
//     formData[target.name] = target.value;
//     console.log(formData)
// }
// )

// function onFormSubmit(e) {
//     e.preventDefault;
//     console.log('отправил');
//     e.target.reset();
//     localStorage.removeItem(MESSAGE);
// }

// function onMassageInput(e) {
//     const massage = e.target.value;
//     localStorage.setItem(MESSAGE, massage);
// }

// function populateTextArea() {
//     const savedMassage = localStorage.getItem(MESSAGE);
//     if (savedMassage) {
//         message.value = savedMassage;
//     }
// }