import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(evt) {
  formData[e.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(evt) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
	const message = document.querySelector('.feedback-form textarea');
	
  email.value = dataStoreage.email || '';
  message.value = dataStoreage.message || '';
})();