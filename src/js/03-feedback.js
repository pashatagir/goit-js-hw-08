import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

populateTextarea();

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (refs.input.value === '' || refs.textarea.value === '') {
    return alert('Я що дарма кодив? Заповни будь ласка усі комірки!');
  }

  evt.currentTarget.reset();

  console.log(formData);

  formData = {};

  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const savedInput = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedInput) {
    refs.input.value = savedInput.email;
    refs.textarea.value = savedInput.message;
  }
}
