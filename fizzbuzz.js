'use strict';

//@param {number} num
//@returns {*} will return 'fizzbuzz'/'fizz'/'buzz' OR the number itself
function fizzbuzz(num) {
    if (num % 15 === 0) {
        return ('fizzbuzz');
    }
    if (num % 5 === 0) {
        return ('buzz');
    }
    if (numb % 3 === 0) {
        return ('fizz'); 
    }
}  


/* 
@param {*} fizzResult will return 'fizzbuzz'/'fizz'/'buzz' OR the number itself
@returns {string} generate ONE fizzBuzz item 
*/
function generateFizzHtml(fizzResult) {
    return (`<div class="fizz-buzz-item ${fizzResult}">
            <span> ${fizzResult} </span>
            </div>`);
}


//Handles form submission
function handleSubmit() {
    const countTo = $('#number-chooser').val('submit', function(event) {
        event.preventDefault();
    });
    .submit 


}


$(handleSubmit);