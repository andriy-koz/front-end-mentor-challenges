'use strict;';

const emailInput = document.querySelector('.email-input');
const btnSubmit = document.querySelector('.btn-submit');
const emailForm = document.querySelector('.email-form');
const btnIcon = document.querySelector('.btn-icon');
const errIcon = document.querySelector('.err-icon');
const errMessage = document.querySelector('.error-message');
const container = document.querySelector('.container');

console.log(emailInput.validity.valid);

emailInput.addEventListener('click', e => {
  if (document.activeElement === emailInput)
    emailForm.style.border = '2px solid hsl(0, 93%, 68%)';
});

btnSubmit.addEventListener('click', e => {
  e.preventDefault();
  emailForm.style.border = '2px solid hsl(0, 93%, 68%)';
  if (!emailInput.validity.valid) {
    errIcon.style.visibility = 'visible';
    errMessage.style.visibility = 'visible';
    console.log('SHOW ERROR ICON');
  } else {
    errIcon.style.visibility = 'hidden';
    errMessage.style.visibility = 'hidden';
  }
});

document.addEventListener('click', e => {
  e.preventDefault();
  if (e.srcElement !== btnSubmit) {
    if (e.srcElement !== btnIcon) {
      if (document.activeElement !== emailInput) {
        if (emailInput.validity.valid) {
          emailForm.style.border = '1px solid hsla(0, 36%, 70%, 0.6)';
          errIcon.style.visibility = 'hidden';
          errMessage.style.visibility = 'hidden';
        }
      }
    }
  }
});
