import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmitForm);


dataLocalStorage();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
//   console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function dataLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = document.querySelector('.feedback-form input');
	const message = document.querySelector('.feedback-form textarea');
	
  formData.email.value = data.email || '';
  formData.message.value = data.message || '';
};