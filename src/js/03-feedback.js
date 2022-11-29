import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

populateTextarea();

let formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  // чесно кажучи цей іфчик тут тому що не зміг збагнути як позбутися undefined,
  // який вилазить при оновлені сторінки якщо заповний один з якихось інпутів
  if (refs.input.value === '' || refs.textarea.value === '') {
    return alert('Я що дарма кодив? Заповни будь ласка усі комірки!');
  }
  evt.currentTarget.reset();
  console.log(formData);
  formData = {};
  localStorage.removeItem('feedback-form-state');
}

function populateTextarea() {
  const savedInput = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedInput) {
    refs.input.value = savedInput.email;
    refs.textarea.value = savedInput.message;
  }
}
