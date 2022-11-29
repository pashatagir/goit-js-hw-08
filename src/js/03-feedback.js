import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 300));

populateTextarea();

const formData = {};

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateTextarea() {
  const savedInput = localStorage.getItem('feedback-form-state');
  const parseInput = JSON.parse(savedInput);
  if (savedInput) {
    refs.input.value = parseInput.email;
    refs.textarea.value = parseInput.message;
  }
}
