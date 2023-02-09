const display1EL = document.querySelector('.display-1');
const display2EL = document.querySelector('.display-2');
const tempResultEL = document.querySelector('.temp-result');
const numbersEL = document.querySelectorAll('.number');
const operationEL = document.querySelectorAll('.operation');
const equalEL = document.querySelector('.equal');
const clearEL = document.querySelector('.all-clear');
const clearLastEL = document.querySelector('.last-entity-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbersEL.forEach(number => {
    number.addEventListener('click', (e) =>{
        if (e.target.innerText === '.' && !haveDot){
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot){
            return;
        }
        dis2Num += e.target.innerText;
        display2EL.innerText = dis2Num;
    })
})
