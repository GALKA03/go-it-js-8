//import throttle from 'lodash.throttle';
// const input = document.querySelector('input')
//const formData = {};
// const textaria = document.querySelector('textarea')
// console.log(textaria);
// const SAVE_KEY = 'feedback-form-state';
// const form = document.querySelector('.feedback-form')
// console.log('form',form)
// //refs.input.addEventListener('input', throttle(onInputEmail,500))
refs.form.addEventListener('submit', onFormlSubmit);
efs.textaria.addEventListener('input', throttle(onTexteriaInput,500));
// // refs.form.addEventListener('input', e => {

// //     formData[e.target.name] = e.target.value;

// //    localStorage.setItem(SAVE_KEY, JSON.stringify(formData));
// //     // confirm.log(parsForm)
// // })
//  //populateTexterea();
// //onLateInput()
// //dataFormStorage();
// //dataFromLocalStorage()

// // function onFormlSubmit(e) {
// //     e.preventDefault();

// //     e.currentTarget.reset();

// //     localStorage.removeItem(SAVE_KEY)
// // };
// //1. сохраняем текст в текстарии после перезагрузки
// function onTexteriaInput(e){
//     const valueMessege = e.target.value;
//     console.log('textarea',valueMessege)
//     localStorage.setItem(SAVE_KEY, valueMessege)

// } 

// // function onInputEmail(e) {
// //     const emeilInput = e.target.value;
// //     localStorage.setItem(SAVE_KEY, emeilInput)
    
// // }

// // function populateTexterea(e) {
// //     const savedMassage = localStorage.getItem(SAVE_KEY)
// //     if (savedMassage) {
// //         console.log(savedMassage)
// //         refs.textaria.value = savedMassage;
       
// //     }
// // }
// // function onLateInput() {
// //     const savedEmail = localStorage.getItem(SAVE_KEY);
// //     if (savedEmail) {
// //          refs.input.value = savedEmail;
// //     }
// //}
// // function dataFormStorage() {
// //     const data = JSON.parse(localStorage.getItem(SAVE_KEY))
// //     if (data) {
// //         textaria.value = data.textaria
// //         input.value = data.input
// //     }
// //}
// // function dataFromLocalStorage() {
// //     const data = JSON.parse(localStorage.getItem('feedback-form-state'));
// //     const email = document.querySelector('.feedback-form input');
// //     const message = document.querySelector('.feedback-form textarea');
// //     if (data) {
// //         email.value = data.email;
// //         message.value = data.message;
// //     }
// // }

