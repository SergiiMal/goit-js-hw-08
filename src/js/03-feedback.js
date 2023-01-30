import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);
	
const formData = {};

function onFormData(evt) {	
	formData[evt.target.name] = evt.target.value;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onSubmitForm(evt) {
	console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
	evt.preventDefault();
	evt.currentTarget.reset();
	localStorage.removeItem(STORAGE_KEY);
	
	if (formData.email === '' || formData.message === '') {
    return;
  }
console.log(formData);

}
(function dataLocalStorage() {
	const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
	const email = document.querySelector('.feedback-form input');
	const message = document.querySelector('.feedback-form textarea')
	if (data) {
		email.value = data.email;
		message.value = data.message;

	
	}
})();