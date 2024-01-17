import { billIinput, customInput, noOfPeople } from "./input-functions.js";
import { billIinputFunction, customInputFunction, noOfPeopleFunction } from "./input-functions.js";


let tip;

let AllTips = document.querySelectorAll('.percent');
AllTips.forEach((tipButton) => {
    tipButton.addEventListener('click', () => {
        tip = parseInt(tipButton.innerHTML);

        tipButton.classList.add('button-clicked');
        // console.log(tip)
    });
});



billIinput.addEventListener('click', (e) => {
    billIinputFunction();
    // alert(billIinput.value)
})

billIinput.addEventListener('input', (e) => {
    if (+billIinput.value === 0) {
        billIinput.classList.add('no-of-people-error')
        // alert("Can't be zero")
    } else {
        billIinput.classList.remove('no-of-people-error')
    }
})



customInput.addEventListener('click', (e) => {
    customInputFunction();
    // alert("hello")
})

customInput.addEventListener('input', (e) => {
    tip = Number(customInput.value);
    // console.log(tip)
    // alert("hello")
})


const numberLabel = document.querySelector('.no-label');


noOfPeople.addEventListener('click', (e) => {
    noOfPeopleFunction();
    // alert("hello")
})


let tipAmount = document.querySelector('.tip-amount');
let totalAmount = document.querySelector('.total-amount');

noOfPeople.addEventListener('input', (e) => {
    if (+noOfPeople.value === 0) {
        noOfPeople.classList.add('no-of-people-error');
        tipAmount.innerHTML = '$0.00';
        totalAmount.innerHTML = '$0.00';
        // alert("Can't be zero")
    } else {
        noOfPeople.classList.remove('no-of-people-error');

        let tipPerPerson = (billIinput.value * (tip / 100)) / noOfPeople.value;
        let totalPerPerson = ((parseFloat(billIinput.value) + tipPerPerson)) / noOfPeople.value;

        tipAmount.innerHTML = `$${tipPerPerson.toFixed(2)}`;
        totalAmount.innerHTML = `$${totalPerPerson.toFixed(2)}`;
    }
});