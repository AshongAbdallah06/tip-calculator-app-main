export const billIinput = document.querySelector('.bill-input');
export const customInput = document.querySelector('.custom');
export const noOfPeople = document.querySelector('.no-of-people-input');

export function billIinputFunction() {
    billIinput.classList.add('complete-border');
    customInput.classList.remove('complete-border');
    noOfPeople.classList.remove('complete-border');
}

export function customInputFunction() {
    billIinput.classList.remove('complete-border');
    customInput.classList.add('complete-border');
    noOfPeople.classList.remove('complete-border');
}

export function noOfPeopleFunction() {
    billIinput.classList.remove('complete-border');
    customInput.classList.remove('complete-border');
    noOfPeople.classList.add('complete-border');
}