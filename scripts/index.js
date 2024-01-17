import { billIinput, customInput, noOfPeople } from "./input-functions.js";
import { billIinputFunction, customInputFunction, noOfPeopleFunction } from "./input-functions.js";


let tip;

let AllTips = document.querySelectorAll('.percent');
AllTips.forEach((tipButton) => {
    tipButton.addEventListener('click', () => {
        tip = parseInt(tipButton.innerHTML);

        document.querySelector('.tip-percent').innerHTML = `(${tip}%)`;
    });
});



billIinput.addEventListener('click', (e) => {
    billIinputFunction();
})

billIinput.addEventListener('input', (e) => {
    if (+billIinput.value === 0) {
        billIinput.classList.add('no-of-people-error')
        document.querySelector('.bill-error').style.opacity = 1;
    } else {
        billIinput.classList.remove('no-of-people-error')
        document.querySelector('.bill-error').style.opacity = 0;
    }
})



customInput.addEventListener('click', (e) => {
    customInputFunction();
})

customInput.addEventListener('input', (e) => {
    tip = Number(customInput.value);

    document.querySelector('.tip-percent').innerHTML = `(${tip}%)`;
})


const numberLabel = document.querySelector('.no-label');


noOfPeople.addEventListener('click', (e) => {
    noOfPeopleFunction();
})


let tipAmount = document.querySelector('.tip-amount');
let totalAmount = document.querySelector('.total-amount');

noOfPeople.addEventListener('input', (e) => {
    if (+noOfPeople.value === 0) {
        document.querySelector('.error').style.opacity = 1;
        tipAmount.innerHTML = '$0.00';
        totalAmount.innerHTML = '$0.00';
        // alert("Can't be zero")
    } else {
        document.querySelector('.error').style.opacity = 0;

        let tipPerPerson = (billIinput.value * (tip / 100)) / noOfPeople.value;
        let totalPerPerson = ((parseFloat(billIinput.value) + tipPerPerson)) / noOfPeople.value;

        tipAmount.innerHTML = `$${tipPerPerson.toFixed(2)}`;
        totalAmount.innerHTML = `$${totalPerPerson.toFixed(2)}`;
    }
});


const resetButton = document.querySelector('.reset');

function reset() {
    billIinput.value = '';
    customInput.value = '';
    tip = 0;
    document.querySelector('.tip-percent').innerHTML = '%'
    noOfPeople.value = '';
    tipAmount.innerHTML = '$0.00';
    totalAmount.innerHTML = '$0.00';
}
resetButton.addEventListener('click', () => {
    reset();
})