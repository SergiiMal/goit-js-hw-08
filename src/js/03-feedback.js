import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmitForm);


dataLocalStorage();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {

  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function dataLocalStorage() {
const saveInput = localStorage.getItem(STORAGE_KEY);
const data = JSON.parse(saveInput);
 
	if (data) {
		form.message.value = data.message || '';
		 form.email.value = data.email || '';
 	    
	}
  
};