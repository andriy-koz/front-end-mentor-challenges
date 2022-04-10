'use strict;';

/*
Calcs: 

Tip amount = (bill * tip%) / people
Total = (bill / people) + tip per pers

 */
const bill = document.getElementById('bill');
const people = document.getElementById('people');
const btnTip = document.querySelectorAll('.btn-tip');
const tipPerPers = document.getElementById('tip-pers');
const totalPerPersEl = document.getElementById('total-pers');
const btnResetEl = document.querySelector('.btn-reset');
const customEl = document.querySelector('.custom');

let tipPercentage = 0;
let peopleValue = 0;
let billValue = 0;

// Function wich checks if people or bill values are valid
const check = function (element) {
  if (element.value === '0' || element.value === '') {
    document.getElementById(`err-${element.id}`).style.visibility = 'visible';
    document.getElementById(`${element.id}`).style.boxShadow =
      '0 0 0 2px rgba(255, 0, 0, 0.7)';
  } else {
    document.getElementById(`err-${element.id}`).style.visibility = 'hidden';
    document.getElementById(`${element.id}`).style = '';
  }
};

// Function wich display results
const displayValues = function () {
  if ((billValue && peopleValue) !== 0) {
    const tipAmountPerPers = Number(
      ((billValue * tipPercentage) / peopleValue).toFixed(2)
    );
    const totalPerPers = Number(billValue / peopleValue + tipAmountPerPers);

    tipPerPers.textContent = `$${tipAmountPerPers}`;
    totalPerPersEl.textContent = `$${totalPerPers.toFixed(2)}`;
  }
};

// Listen for changes in Bill input
bill.addEventListener('change', e => {
  e.preventDefault;
  check(bill);
  check(people);
  billValue = e.target.value;
  displayValues();
});

// Listen for clicks on tip% buttons
btnTip.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault;
    check(bill);
    check(people);
    customEl.value = '';
    btnTip.forEach(e => {
      e.classList.remove('active');
    });
    btn.classList.add('active');
    tipPercentage = Number(btn.value.slice(0, -1) / 100);
    displayValues();
  });
});

// Listen for changes in Custom input
customEl.addEventListener('click', e => {
  btnTip.forEach(e => {
    e.classList.remove('active');
  });
});
customEl.addEventListener('change', e => {
  e.preventDefault;
  check(bill);
  check(people);
  tipPercentage = Number(e.target.value / 100);
  displayValues();
});

// Listen for changes in Number of People input
people.addEventListener('change', e => {
  check(bill);
  check(people);
  peopleValue = e.target.value;
  displayValues();
});

// Button RESET functionality
btnResetEl.addEventListener('click', e => {
  e.preventDefault;
  tipPerPers.textContent = '$0.00';
  totalPerPersEl.textContent = '$0.00';
  btnTip.forEach(btn => {
    btn.classList.remove('active');
  });
  people.value = '';
  bill.value = '';
  customEl.value = '';
  tipPercentage = 0;
  peopleValue = 0;
  billValue = 0;
});
