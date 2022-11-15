import '../src/index.js';
import '../src/index.scss';
'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);
  async function formSend(e) {
    e.preventDefault();
    let {
      error,
      value
    } = formValidate(form);
    if (error === 0) {
      let response = await fetch('https://63718797025414c637f9426e.mockapi.io/numbers', {
        method: 'POST',
        body: JSON.stringify({
          value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
      if (!response.ok) {
        alert('Ошибка при отправке данных');
      } else {
        form.reset();
        alert('Данные успешно отправлены :)');
      }
    } else {
      alert('Заполните обязательное поле');
    }
  }
  function formValidate(form) {
    let error = 0;
    let input = document.querySelectorAll('.input');
    let transformInput = document.querySelectorAll('.transform_input');
    formRemoveError(transformInput[0]);
    if (input[0].value === '') {
      formAddError(transformInput[0]);
      error++;
    }
    return {
      error,
      value: input[0].value
    };
  }
  function formAddError(tag) {
    tag.classList.add('_error');
  }
  function formRemoveError(tag) {
    tag.classList.remove('_error');
  }
});