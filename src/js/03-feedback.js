import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';


form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

dataLocalStorage();

const formData = {};

function onFormData(evt) {
	formData[evt.target.name] = evt.target.value;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
	console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
	evt.preventDefault();

	formData.email = form.email.value;
	formData.message = form.message.value;

	if (formData.email === '' || formData.message === '') {
		return;
	}
// 	console.log(formData);

	evt.currentTarget.reset();
	localStorage.removeItem(STORAGE_KEY);

}


function dataLocalStorage() {

	const email = document.querySelector('.feedback-form input');
	const message = document.querySelector('.feedback-form textarea')
	
	

	if (localStorage.getItem(STORAGE_KEY)) {
		const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

		form.email.value = data.email;
		form.message.value = data.message;
	}
};